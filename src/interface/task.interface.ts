export interface TaskGeneric {
    title:string,
    description:string
}

export interface NewTask extends TaskGeneric {
    statusId?:number,
    userId?:number
}
