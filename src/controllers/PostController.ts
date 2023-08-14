import { Post } from "../models/post";

export class PostController {
    OnGetAll = async(req: any, res: any) => {
        if(req.query.cate_id){
            const currentPost = await Post.findOne({ where: { id: req.query.cate_id }})
            if(currentPost){
                if(currentPost.isQuestion){
                    return res.status(200).json({
                        status: true,
                        isQuestion: true,
                        description: 'get answer success.',
                        data: currentPost
                    }) 
                }
            }
            const result = await Post.findAll({
                where: { parent_id: req.query.cate_id }
            })
            return res.status(200).json({
                status: true,
                isQuestion: false,
                description: 'get categories success.',
                data: result
            }) 
        }
        const result = await Post.findAll({
            where: { parent_id: 0 }
        })
        return res.status(200).json({
            status: true,
            isQuestion: false,
            description: 'get main categories success.',
            data: result
        }) 
    }
    OnCreateMockDate = async (req: any, res: any) => {
        const mock = [
            {
                id: 1,
                content: '<p>สอบถามค่าเทอม</p>', 
                answer: '',
                parent_id: 0,
                isQuestion: false
            },
            {
                id: 2,
                content: '<p>เปิดเรียนต้องทำอะไรบ้าง</p>', 
                answer: '',
                parent_id: 0,
                isQuestion: false
            },
            {
                id: 3,
                content: '<p>ติดต่อฝ่ายทะเบียน</p>', 
                answer: '<p>อาคาร 1 ชั้น 2</p>',
                parent_id: 0,
                isQuestion: true
            },
            {
                id: 4,
                content: '<p>เปิดเทอมวันไหน</p>', 
                answer: '<p>20 กย. 2567</p>',
                parent_id: 0,
                isQuestion: true
            },
            {
                id: 5,
                content: '<p>ทุนการศึกษา</p>', 
                answer: '<p>ยังไม่มีข้อมูลของทุนการศึกษา ปีการศึกษา 2567</p>',
                parent_id: 0,
                isQuestion: true
            },
            {
                id: 6,
                content: '<p>คณะวิศวกรรมศาสตร์</p>', 
                answer: '',
                parent_id: 1,
                isQuestion: false
            },
            {
                id: 7,
                content: '<p>คณะศึกษาศาสตร์</p>', 
                answer: '',
                parent_id: 1,
                isQuestion: false
            },
            {
                id: 8,
                content: '<p>คณะมนุษย์ศาสตร์</p>', 
                answer: '',
                parent_id: 1,
                isQuestion: false
            },
            {
                id: 9,
                content: '<p>สาขาวิศวกรรมคอมพิวเตอร์</p>', 
                answer: '<p>12,500 บาท</p>',
                parent_id: 6,
                isQuestion: true
            },
            {
                id: 10,
                content: '<p>สาขาวิศวกรรมไฟฟ้า</p>', 
                answer: '<p>12,500 บาท</p>',
                parent_id: 6,
                isQuestion: true
            },
            {
                id: 11,
                content: '<p>สาขาวิศวกรรมเครื่องกล</p>', 
                answer: '<p>12,500 บาท</p>',
                parent_id: 6,
                isQuestion: true
            },
            {
                id: 12,
                content: '<p>ลงทะเบียนเรียน</p>', 
                answer: '<p>ดูรายละเอียดการลงทะเบียนได้ที่ <a href="www.google.com">www.google.com</a> </p>',
                parent_id: 2,
                isQuestion: true
            },
            {
                id: 13,
                content: '<p>ชำระค่าเทอม</p>', 
                answer: '<p>ดูรายละเอียดการชำระค่าเทอมได้ที่ <a href="www.google.com">www.google.com</a> </p>',
                parent_id: 2,
                isQuestion: true
            },
        ];

        const data = await Post.bulkCreate(mock)

        if(!data){
            return res.status(400).json({
                status: false,
                description: 'Create mock data failed'
            })
        }

        return res.status(201).json({
            status: true,
            description: 'Create mock data success.'
        })
    }
}