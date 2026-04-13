import { UserIcon } from "lucide-react";
import { title } from "process";
import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: 'startup', // 数据库表的名称
    title: 'Startup', // 在 Sanity Studio 中显示的名称
    type: 'document', // 定义这是一个文档类型，在这个文档中，我们可以存入多个创业公司的信息
    // 数据表字段
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }]
        }),
        defineField({
            name: 'views',
            type: 'number'
        }),
        defineField({
            name: 'description',
            type: 'text'
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation: (Rule) => Rule.min(1).max(20).required().error('Category is required and must be between 1 and 20 characters')
        }),
        defineField({
            name: 'image',
            type: 'url',
            validation: (Rule) => Rule.required().error('Image URL is required')
        }),
        defineField({
            name: 'pitch',
            type: 'markdown'
        })
    ],
})