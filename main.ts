import { RpcService } from './service'
import { recommend } from './recommend';

const service = new RpcService();
const run = async () => {
    await service.init();
    const res = await service.service.getRecommendPostsId(new recommend.GetRecommendPostsIdInput({
        userId: 1,
        offset: 0,
        number: 10
    })).toPromise()
    console.log('请求结果：', res);
}

run().catch(err => {
    console.log(err);
});