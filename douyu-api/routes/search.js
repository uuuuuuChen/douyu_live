const router = require('koa-router')()
const Data1 = require('../data/SearchData1')
const Data2 = require('../data/SearchData2')
const {
    fetchSearchList,
    fetchYZList,
    fetchLOLList,
    fetchWZList,
    fetchHotList
} = require('../api')
// const data1 = require('../data/SearchData1')

router.get('/result', async (ctx, next) => {
    const w = encodeURI(ctx.query.page)
    try {
        const searchdata = await fetchSearchList(w)
        const searchdata1 = await fetchSearchList(2)
        const searchdata2 = await fetchSearchList(3)
        const searchdata3 = await fetchSearchList(4)
        const searchdata4 = await fetchSearchList(5)
        const searchdata5 = await fetchSearchList(6)
        const searchdata6 = await fetchSearchList(7)
        const searchdata7 = await fetchSearchList(8)
        const searchdata8 = await fetchSearchList(9)
        const searchdata9 = await fetchSearchList(10)
        const searchdata10 = await fetchSearchList(11)
        const searchdata11 = await fetchYZList(4)
        const searchdata12 = await fetchYZList(2)
        const searchdata13 = await fetchYZList(3)
        const searchdata14 = await fetchLOLList(4)
        const searchdata15 = await fetchLOLList(2)
        const searchdata16 = await fetchLOLList(3)
        const searchdata17 = await fetchLOLList(1)
        const searchdata18 = await fetchLOLList(5)
        const searchdata19 = await fetchWZList(10)
        const searchdata20 = await fetchWZList(12)
        const data = [
            ...searchdata1.data.list,
            ...searchdata2.data.list,
            ...searchdata3.data.list,
            ...searchdata4.data.list,
            ...searchdata5.data.list,
            ...searchdata6.data.list,
            ...searchdata7.data.list,
            ...searchdata8.data.list,
            ...searchdata9.data.list,
            ...searchdata10.data.list,
            ...searchdata11.data.list,
            ...searchdata12.data.list,
            ...searchdata13.data.list,
            ...searchdata14.data.list,
            ...searchdata15.data.list,
            ...searchdata16.data.list,
            ...searchdata17.data.list,
            ...searchdata18.data.list,
            ...searchdata19.data.list,
            ...searchdata20.data.list,
            ...searchdata.data.list,
        ]
        // console.log(data)
        // console.log(searchdata)
        let resData = {
            data: data,
            code: 0,
            message: '0'
        }
        // console.log(resData)
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})

module.exports = router.routes()