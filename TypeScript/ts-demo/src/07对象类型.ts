import { type } from "node:os";

{
    console.log('对象类型------------------------');
    let obj: {
        uname: string
        age: number,
        gender: string,
        siHi: (content: string) => void
        hobby?: string   //可选属性
    }
        = {
        uname: 'zjm',
        age: 22,
        gender: '男',
        siHi: (content) => {
            console.log(content + '八嘎');
        }
    }




    //练习
    type DateText = {
        name: string,
        sex: string,
        cj: number,
        sg: number,
        ddd?:string,
        student: () => void,
        hobby: (con:string) => void
    }


  let  st:DateText={
         name:'zjjj',
         sex:'男',
         cj:100,
         sg:180,
         student(){console.log('我爱学习')},
         hobby(con) {
             console.log('我的爱好'+con);
             
         },
    }

    st.hobby('打游戏')
    st.student()
    console.log( st.name);
    st.sex.concat()
    console.log(st.ddd);
    st.ddd && st.ddd?.toUpperCase()
    st.ddd?.toUpperCase()
    
    
    
   
}