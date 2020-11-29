import {createSlice} from '@reduxjs/toolkit';


export type ProductType = {
    book : Array<BookType>
}

export type BookType = {
    title: string,
    image: string
    id: number,
    description: string
    price: number
    author : string
    inCart: boolean
}

const slice = createSlice({
    name: 'catalog',
    initialState: {book : [{
            title: '1984',
            image: 'https://s5-goods.ozstatic.by/2000/449/348/10/10348449_0.jpg',
            id: 1,
            description: 'Своеобразный антипод второй великой антиутопии XX века' +
                ' "О дивный новый мир" Олдоса Хаксли. Что, в сущности, страшнее: доведенное' +
                ' до абсурда "общество появления" или доведенное до абсолюта "общество идеи"?',
            price: 8.21,
            author : 'Оруэлл',
            inCart: false
        }, {
            title: 'О дивный новый мир',
            image: 'https://s1-goods.ozstatic.by/2000/520/37/1/1037520_0.jpg',
            id: 2,
            description: 'Очень глубокая книга. Она не о банальном противостоянии "человека против системы',
            price: 8.53,
            author : 'Хаксли',
            inCart: false
        }, {
            title: 'Триумфальная арка',
            image: 'https://img4.labirint.ru/rc/ee8fd3c2d43edfebe4a4f1fada919573/220x340/books60/599528/cover.jpg?1564230332',
            id: 3,
            description: '"Триумфальная арка" - пронзительная история любви всему наперекор, любви, приносящей боль, но и дарующей бесконечную радость.',
            price: 9.31,
            author : 'Ремарк',
            inCart: false
        }, {
            title: 'Повелитель мух',
            image: 'https://s2-goods.ozstatic.by/2000/602/37/1/1037602_0.jpg',
            id: 4,
            description: 'Страшная история мальчиков, попавших волею судьбы на необитаемый остров. Мальчиков заигравшихся в жестокость, охоту, в войну. Книга о том, насколько неоднозначна душа человека, о потайных уголках и желаниях власти.',
            price: 15,
            author : 'Голдинг',
            inCart: false
        }, {
            title: 'Три товарища',
            image: 'https://i1.wp.com/allbook.by/wp-content/uploads/2016/12/p_8_6_3_863-tri-tovarishta.jpg?fit=200%2C313&ssl=1',
            id: 5,
            description: 'Самый красивый в нашем столетии роман о любви...Самый обаятельный в нашем столетии роман о дружбе. Самый трагический и самый прелестный роман о человеческих отношениях за всю историю ХХ в.',
            price: 15,
            author : 'Ремарк',
            inCart: false
        }, {
            title: 'Черный обелиск',
            image: 'https://s1.livelib.ru/boocover/1000955584/o/e8ae/Erih_Mariya_Remark__Chernyj_obelisk.jpeg',
            id: 6,
            description: '"Черный обелиск" - с одной стороны, роман о великой силе любви, способной вылечить даже душевнобольного, с другой стороны - философские размышления о Боге, религии, смысле жизни, и наконец, с третьей - яркая историческая картина эпохи, где все заметнее заявляет о себе приближающийся фашизм.',
            price: 5,
            author : 'Ремарк',
            inCart: false
        },]} as ProductType ,
    reducers: {}
})

export const catalogReducer = slice.reducer