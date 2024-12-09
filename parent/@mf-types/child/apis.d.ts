
    export type RemoteKeys = 'child/CMPButton' | 'child/zustand';
    type PackageType<T> = T extends 'child/zustand' ? typeof import('child/zustand') :T extends 'child/CMPButton' ? typeof import('child/CMPButton') :any;