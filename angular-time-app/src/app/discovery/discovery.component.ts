import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent {
  
  constructor(private http: HttpClient) {}

  public apiName:string='';
  public exploreJson='[{"ID":"2e81489a-d016-fac4-b3e4-5c8e1dc2b945","Node":"api-node-1","Address":"10.5.0.5","Datacenter":"dc1","TaggedAddresses":{"lan":"10.5.0.5","lan_ipv4":"10.5.0.5","wan":"10.5.0.5","wan_ipv4":"10.5.0.5"},"NodeMeta":{"consul-network-segment":""},"ServiceKind":"","ServiceID":"api","ServiceName":"api","ServiceTags":[],"ServiceAddress":"","ServiceWeights":{"Passing":1,"Warning":1},"ServiceMeta":{},"ServicePort":3000,"ServiceEnableTagOverride":false,"ServiceProxy":{"MeshGateway":{},"Expose":{}},"ServiceConnect":{},"CreateIndex":121,"ModifyIndex":121},{"ID":"4cad64a4-b202-cdb3-a788-e3caf87bfeeb","Node":"api-node-2","Address":"10.5.0.6","Datacenter":"dc1","TaggedAddresses":{"lan":"10.5.0.6","lan_ipv4":"10.5.0.6","wan":"10.5.0.6","wan_ipv4":"10.5.0.6"},"NodeMeta":{"consul-network-segment":""},"ServiceKind":"","ServiceID":"api","ServiceName":"api","ServiceTags":[],"ServiceAddress":"","ServiceWeights":{"Passing":1,"Warning":1},"ServiceMeta":{},"ServicePort":3000,"ServiceEnableTagOverride":false,"ServiceProxy":{"MeshGateway":{},"Expose":{}},"ServiceConnect":{},"CreateIndex":170,"ModifyIndex":170}]';
  }
