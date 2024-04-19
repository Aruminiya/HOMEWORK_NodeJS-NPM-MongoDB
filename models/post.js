const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true,"姓名必填"]
    },
    tags:Array,
    type: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now,
        // select 保護起來 只能在資料庫看到 前台回傳看不到
        select: false
    },
    content:{
        type:String,
        required: [true,"內文必填"]
    },
    likes:{
        type:Number,
        default: 0
    },
    comments:{
        type:Number,
        default: 0
    }
},
// versionKey 不要加入 mongoose 預設的 __v
// collection 自訂資料庫集合名稱 不受 mongoose 預設規範限制
// timestamps 資料創建日期 資料更新日期
{
    versionKey: false,
    // collection: 'room',
    // timestamps: true
}
)

const Post = mongoose.model('Post', postSchema);
// Room 會被變成 rooms
// 開頭變小寫
// 強制加上 s

module.exports = Post;