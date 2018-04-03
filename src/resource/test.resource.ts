import { IResourceMethod, Resource, ResourceAction, ResourceParams } from '@ngx-resource/core';

@ResourceParams()
export class TestResource extends Resource {

    @ResourceAction({
        path: 'http://127.0.0.1:3111/api/core/i18n/translations/en'
    })
    test: IResourceMethod<void, void>;
                          
    @ResourceAction({
        path: '/api/send-data',
        method: ResourceRequestMethod.Post
    })
    public sendData: IResourceMethod<any, void>;

}
