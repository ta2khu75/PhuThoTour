export class FileUtil {
    public static getFileExtension(file: File): string {
        return file.name.split(".").pop() ?? ""
    }
}