//wechat
// const reObject={
//     url:'sdinci',
//     header:'',
//     timeout: 200,
//     success: function suc(res){ comsole.log('调用成功')},
//     fail:(err)=>{console.log('调用失败')}
// }
// wx.request(reObject)

//array.foreach
const arr1=[1,2,3,4,[8,6],5,[1],6];
arr1.flat().map(ele=>ele+1).filter(ele=>ele>4).sort((a,b)=>b-a).forEach(ele=>console.log(ele))
console.log(arr2=new Set(arr1.flat()))
console.log(arr1.flat().slice(2,6))
arr3=arr1.flat()
console.log(arr3,arr3.splice(3,0,9),arr3.reverse(),arr3.join('-'))
console.log(arr3.sort((q,w)=>q-w),)
//String
const str1='123 456'
console.log(str1.slice(0,5),str1.charAt(4))
//路径参数
function urlParser(url){
    const strarr=url.split('?')
    const str5=strarr[1]
    const strarr1=str5.split('&')
    const resultset={}
    strarr1.forEach(ele => {
    const strarr2=ele.split('=')
    resultset[strarr2[0]]=strarr2[1]
    })
    return resultset
}
const url1='https://www.baidu.com/s?wd=vue&rsv_spt=1&rsv_iqid=0xa5d93f9e0009e6e3&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=4&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=vue&rsp=8&inputT=706&rsv_sug4=7723'

console.log(urlParser(url1))
console.log(p=url1.split('?'),p[1].split('&'))
