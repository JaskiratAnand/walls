export interface Wallpaper {
    url: string;
    name: string;
    liked: boolean;
    suggested: boolean;
    library: boolean;
}

export function useSuggestedWallpapers(): Wallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.suggested);
}

export function useLibraryWallpapers(): Wallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.library);
}

export function useLikedWallpapers(): Wallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.liked);
}

export function useCarouselWallpapers(): Wallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.slice(0, 4);
}

export function useWallpapers() : Wallpaper[] {
    return [{
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
        suggested: true,
        library: true
    }]
}