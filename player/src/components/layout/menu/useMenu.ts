import {Camera,Music,VideoOne,Fm} from '@icon-park/vue-next' //引用图标库

interface IMenu {
    name:string;
    key:string;
    icon?:any;   //问号表示可选属性 加不加都可以的意思
}

interface IMenus {
    name:string;
    menus:IMenu[]
}

export function useMenu() {
    const menus : IMenus[]= [
        {
            name: '在线音乐',
            menus: [
                {
                    name: '推荐',
                    key: 'discover',
                    icon: Camera
                },
                {
                    name: '音乐馆',
                    key: 'music',
                    icon: Music
                },
                {
                    name: '视频',
                    key: 'video',
                    icon: VideoOne
                },
                {
                    name: '电台',
                    key: 'dj',
                    icon: Fm
                },

            ]
        },
        {
            name:'我的音乐',
            menus:[]
        }
    ];
    return {
        menus
    }
}