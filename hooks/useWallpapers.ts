export interface Wallpaper {
    url: string;
    name: string;
    liked: boolean;
    suggested: boolean;
    library: boolean;
}

export function useSuggestedWallpapers(): Wallpaper[] {
    const wallpapers = wallpaperList;
    return wallpapers.filter(wallpaper => wallpaper.suggested);
}

export function useLibraryWallpapers(): Wallpaper[] {
    const wallpapers = wallpaperList;
    return wallpapers.filter(wallpaper => wallpaper.library);
}

export function useLikedWallpapers(): Wallpaper[] {
    const wallpapers = wallpaperList;
    return wallpapers.filter(wallpaper => wallpaper.liked);
}

export function useCarouselWallpapers(): Wallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.slice(0, 4);
}

export function useWallpapers() : Wallpaper[] {
    const shuffeledWallpapers = wallpaperList
        .map((wallpaper) => ({wallpaper, random: Math.random()}))
        .sort((a, b) => a.random - b.random)
        .map(({ wallpaper }) => wallpaper);
    return shuffeledWallpapers.slice(0,20)
}

const wallpaperList: Wallpaper[] = [{
    url: "https://images.unsplash.com/photo-1715512518530-005c28ed4b90?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sea Side",
    liked: true,
    suggested: false,
    library: true
}, {
    url: "https://images.unsplash.com/photo-1727783851864-67d9d2e78ea1?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Night Mountains",
    liked: false,
    suggested: true,
    library: false
}, {
    url: "https://plus.unsplash.com/premium_photo-1721353413119-230abf059a1c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mountain Jungle",
    liked: false,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1702637196726-9d9186a7f3e5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Pink Trees",
    liked: true,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1705836901350-cdc948fe8fc8?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mountain Road",
    liked: false,
    suggested: false,
    library: true
}, {
    url: "https://images.unsplash.com/photo-1723476068476-b19f5d0f647b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Snowy Lake",
    liked: true,
    suggested: true,
    library: true
}, {
    url: "https://images.unsplash.com/photo-1727705744337-5da00ac764a6?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "3D Bubbles",
    liked: true,
    suggested: true,
    library: true
}, {
    url: "https://images.unsplash.com/photo-1727347313479-b1a9812627e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lamppost Render",
    liked: true,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1727075252960-7eeff88ae038?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sea Rocks B&W",
    liked: false,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1727773379275-5f4150874791?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Silver Heads",
    liked: false,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1713019511713-ea7152746dc6?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Porsche Render",
    liked: true,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1727646798983-9154aa42f6aa?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Golden Chain",
    liked: true,
    suggested: false,
    library: true
}, {
    url: "https://images.unsplash.com/photo-1718893349848-ca3eeb3a7030?q=80&w=2590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Concrete Arc",
    liked: false,
    suggested: true,
    library: true
}, {
    url: "https://images.unsplash.com/photo-1716887616455-392d1ca285f1?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Buildings",
    liked: true,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1727117774086-074d19d8df85?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Inside Clock Tower",
    liked: false,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1726910133626-9b573eca70ff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Abstract Fins",
    liked: false,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "GameBoy",
    liked: false,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1727829441330-9a743f524085?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Middle of the Forest",
    liked: false,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1727884747982-4532ed1cb541?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Wild Fox",
    liked: false,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1727946283836-cec378342537?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mountain Heights",
    liked: false,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1719437492375-36229ce9950f?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Bald Eagle",
    liked: false,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1723808674465-ef0d3c7e4627?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Squirrel",
    liked: false,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1727468801000-4767f64c808f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mufasa",
    liked: false,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1699542981983-db3c2eebf9eb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Windows",
    liked: false,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1701455103786-135f83415f8e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "House",
    liked: false,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1708295368739-8e1b6c448244?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lecture Room",
    liked: false,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1716043145345-42fb93f7c20a?q=80&w=2562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Fries",
    liked: false,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1716912450031-da2ea352466d?q=80&w=2568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Quadberry",
    liked: false,
    suggested: false,
    library: true
}, {
    url: "https://images.unsplash.com/photo-1652169891230-0f9a4bbb6fe5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Waffel'in",
    liked: true,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1727946331080-4b743f2ab9a7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Soul Mountain",
    liked: true,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1719258264857-9c380d840a1a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Adventure Sport",
    liked: false,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1727974187990-f3a506719418?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "IceyRoad",
    liked: false,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Japan",
    liked: true,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1727967856489-f7d865337583?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Apples",
    liked: false,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1704402838495-7d2ac0798b8d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Doggy Brasco",
    liked: false,
    suggested: false,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1709117957532-7bab5ca3a559?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ayyeeee....",
    liked: false,
    suggested: true,
    library: false
}, {
    url: "https://images.unsplash.com/photo-1715590876582-18e4844864a6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "THE SQUIRREL",
    liked: false,
    suggested: false,
    library: true
},{
    url: "https://images.unsplash.com/photo-1727058450264-d6e78c82f694?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lamborgini Diablo",
    liked: true,
    suggested: false,
    library: true
}]