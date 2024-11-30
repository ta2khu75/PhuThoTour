import { Timestamp } from "firebase/firestore";
import dayjs from "dayjs"
import "dayjs/locale/vi";
export class FunctionUtil {
    private static readonly MONTHS_IN_WORDS: { [key: number]: string } = {
        1: "Một",
        2: "Hai",
        3: "Ba",
        4: "Tư",
        5: "Năm",
        6: "Sáu",
        7: "Bảy",
        8: "Tám",
        9: "Chín",
        10: "Mười",
        11: "Mười một",
        12: "Mười hai"
    }

    static convertCreatedDateToString(date: Date | Timestamp) {
        if (date instanceof Timestamp) {
            return dayjs(date.toDate()).format("DD/MM/YYYY")
        } else {
            return dayjs(date).format("DD/MM/YYYY")
        }
    }
    static convertCreatedDateToStringHour(date: Date | Timestamp) {
        if (date instanceof Timestamp) {
            return dayjs(date.toDate()).format("DD/MM/YYYY HH:mm")
        } else {
            return dayjs(date).format("DD/MM/YYYY HH:mm")
        }
    }
    static convertCreateDateToStringVn(date: Date | Timestamp) {
        dayjs.locale("vi");
        if (date instanceof Timestamp) {
            const datee = dayjs(date.toDate());
            const monthNumber = datee.month() + 1; // `month()` trả về 0-11, cần +1
            const monthInWords = FunctionUtil.MONTHS_IN_WORDS[monthNumber];
            const day = datee.date();
            const year = datee.year();
            return `Tháng ${monthInWords} ${day}, ${year}`;
        } else {
            const datee = dayjs(date)
            const monthNumber = datee.month() + 1; // `month()` trả về 0-11, cần +1
            const monthInWords = FunctionUtil.MONTHS_IN_WORDS[monthNumber];
            const day = datee.date();
            const year = datee.year();
            return `Tháng ${monthInWords} ${day}, ${year}`;
        }
    }
}