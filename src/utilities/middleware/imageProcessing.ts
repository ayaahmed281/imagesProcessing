import fs from "fs"
import {Response, Request, NextFunction} from "express"
import sharp from "sharp"
const projectPath: string = process.cwd()

export async function resizeImage(width: string, height: string, name: string): Promise<void> {
  await sharp(`images/${name}`)
    .resize({
      width: parseInt(width),
      height: parseInt(height)
    })
    .toFile(projectPath + `/src/resized/${width}_${height}_${name}`)
}

async function imageProcessing(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const {name, width, height} = req.query
    const resizedImagePath: string = projectPath + `/src/resized/${width}_${height}_${name}`
    if (!fs.existsSync(resizedImagePath.toString()))
      await resizeImage(width as string, height as string, name as string)
    res.sendFile(projectPath + `/src/resized/${width}_${height}_${name}`)
  } catch (error) {
    console.log(error)
    res.sendFile(projectPath + `/src/error.json`)
  }
  next()
}

export default imageProcessing
