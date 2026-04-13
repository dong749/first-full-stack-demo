import { UserIcon } from "lucide-react";
import { title } from "process";
import { defineField, defineType } from "sanity";

export const author = defineType({
    name: 'author', // 数据库表的名称
    title: 'Author', // 在 Sanity Studio 中显示的名称
    type: 'document', // 定义这是一个文档类型，在这个文档中，我们可以存入多个作者的信息
    icon: UserIcon, // 在 Sanity Studio 中显示的图标
    // 数据表字段
    fields: [
        defineField({
            name: 'id',
            type: 'number'
        }),
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'username',
            type: 'string'
        }),
        defineField({
            name: 'email',
            type: 'string'
        }),
        defineField({
            name: 'image',
            type: 'url'
        }),
        defineField({
            name: 'bio',
            type: 'text'
        }),
    ],
    // 在 Sanity Studio 中预览文档时显示的字段
    preview: {
        select: {
            title: 'name',
        }
    }
})