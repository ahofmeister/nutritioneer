import {format} from "date-fns";

export const formatDate = (createdAt: string) => format(new Date(createdAt), 'dd.MM.yyyy')
