import {
  DanmuMsgTypeEnum,
  ILiveRoom,
  IUser,
  LiveRoomTypeEnum,
} from './interface';

export interface IWsFormat<T> {
  /** 用户socket_id */
  socket_id: string;
  /** 是否是主播 */
  is_anchor: boolean;
  /** 用户信息 */
  user_info?: IUser;
  data: T;
}

export type WsUpdateJoinInfoType = IWsFormat<{
  live_room_id: number;
  track?: { audio: number; video: number };
  rtmp_url?: string;
}>;

export type WSGetRoomAllUserType = IWsFormat<{
  liveUser: { id: any; rooms: any[] }[];
}>;

export type WsRoomLivingType = IWsFormat<{
  live_room: ILiveRoom;
  anchor_socket_id: string;
}>;

export type WsGetLiveUserType = IWsFormat<{
  live_room_id: number;
}>;

export type WsMessageType = IWsFormat<{
  msgType: DanmuMsgTypeEnum;
  msg: string;
  live_room_id: number;
}>;

export type WsOtherJoinType = IWsFormat<{
  live_room: ILiveRoom;
  live_room_user_info: IUser;
  join_user_info?: IUser;
  join_socket_id: string;
}>;

export type WsStartLiveType = IWsFormat<{
  cover_img: string;
  name: string;
  type: LiveRoomTypeEnum;
}>;

export type WsJoinType = IWsFormat<{
  socket_id: string;
  live_room: ILiveRoom;
  anchor_info?: IUser;
  user_info?: IUser;
}>;

export type WsLeavedType = IWsFormat<{
  socket_id: string;
  user_info?: IUser;
}>;

export type WsRoomNoLiveType = IWsFormat<{
  live_room: ILiveRoom;
}>;

export type WsOfferType = IWsFormat<{
  sdp: any;
  sender: string;
  receiver: string;
  live_room_id: number;
}>;

export type WsAnswerType = IWsFormat<{
  sdp: any;
  sender: string;
  receiver: string;
  live_room_id: number;
}>;

export type WsHeartbeatType = IWsFormat<{
  socket_id: string;
}>;

export type WsCandidateType = IWsFormat<{
  live_room_id: number;
  candidate: RTCIceCandidate;
  receiver: string;
  sender: string;
}>;

export type WsMsrBlobType = IWsFormat<{
  live_room_id: number;
  blob: any;
  blob_id: string;
  /** 每个blob多少秒 */
  chunk: number;
}>;
