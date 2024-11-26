// src/utils/notificationService.ts
import { notification } from 'antd';
type NotificationType = 'success' | 'info' | 'warning' | 'error';
export class Notify {
    static success(message: string, description?: string) {
        notify('success', message, description);
    }
    static error(message: string, description?: string) {
        notify('error', message, description);
    }
    static warning(message: string, description?: string) {
        notify('warning', message, description);
    }
    static info(message: string, description?: string) {
        notify('info', message, description);
    }
}
const notify = (type: NotificationType, message: string, description?: string) => {
    notification[type]({
        message,
        description,
    });
};
export default notify;
