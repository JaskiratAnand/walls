export interface Wallpaper {
    url: string;
    name: string;
}

export function useWallpapers() : Wallpaper[] {
    return [{
        url: "https://images.unsplash.com/photo-1715512518530-005c28ed4b90?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jack Brown"
    }, {
        url: "https://images.unsplash.com/photo-1727783851864-67d9d2e78ea1?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "John Harris"
    }, {
        url: "https://plus.unsplash.com/premium_photo-1721353413119-230abf059a1c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Kat Andrew"
    }, {
        url: "https://images.unsplash.com/photo-1702637196726-9d9186a7f3e5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Harry W2s"
    }, {
        url: "https://images.unsplash.com/photo-1705836901350-cdc948fe8fc8?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "John Harris"
    }, {
        url: "https://images.unsplash.com/photo-1723476068476-b19f5d0f647b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "MKBSD"
    }]
}