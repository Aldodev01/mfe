
    export type RemoteKeys = 'child/CMPButton' | 'child/zustand' | 'child/Global' | 'child/Recheiver';
    type PackageType<T> = T extends 'child/Recheiver' ? typeof import('child/Recheiver') :T extends 'child/Global' ? typeof import('child/Global') :T extends 'child/zustand' ? typeof import('child/zustand') :T extends 'child/CMPButton' ? typeof import('child/CMPButton') :any;