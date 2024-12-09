
    export type RemoteKeys = 'child/CMPButton';
    type PackageType<T> = T extends 'child/CMPButton' ? typeof import('child/CMPButton') :any;