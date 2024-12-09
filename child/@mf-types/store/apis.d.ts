
    export type RemoteKeys = 'store/redux';
    type PackageType<T> = T extends 'store/redux' ? typeof import('store/redux') :any;