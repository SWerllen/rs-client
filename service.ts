import { Client, ClientProxy, Transport, ClientProxyFactory, ClientGrpc } from '@nestjs/microservices'
import { Observable } from 'rxjs';
import { recommend } from './recommend';

interface RecommendController {
  getRecommendPostsId(data: recommend.GetRecommendPostsIdInput): Observable<recommend.GetRecommendPostsIdResult>;
}

export class RpcService {

  private _client: ClientGrpc;

  private _recommendService: RecommendController;

  constructor() {
  }

  public async init() {
    this._client = ClientProxyFactory.create({
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:3012',    // 服务器地址和端口
        package: 'recommend',
        protoPath: 'recommend.proto',
      }
    })
    console.log(this._client);
    this._recommendService = this._client.getService<RecommendController>('RecommendController');
  }

  public get client() {
    return this._client;
  }

  public get service() {
    return this._recommendService;
  }
}