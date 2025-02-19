// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddGroupMembersRequest extends $tea.Model {
  appId?: string;
  requestParams?: AddGroupMembersRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: AddGroupMembersRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMembersShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMembersResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddGroupMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceBlacklistRequest extends $tea.Model {
  appId?: string;
  requestParams?: AddGroupSilenceBlacklistRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: AddGroupSilenceBlacklistRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceBlacklistShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceBlacklistResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceBlacklistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddGroupSilenceBlacklistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddGroupSilenceBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceWhitelistRequest extends $tea.Model {
  appId?: string;
  requestParams?: AddGroupSilenceWhitelistRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: AddGroupSilenceWhitelistRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceWhitelistShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceWhitelistResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddGroupSilenceWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddGroupSilenceWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSilenceAllGroupMembersRequest extends $tea.Model {
  appId?: string;
  requestParams?: CancelSilenceAllGroupMembersRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: CancelSilenceAllGroupMembersRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSilenceAllGroupMembersShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSilenceAllGroupMembersResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSilenceAllGroupMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelSilenceAllGroupMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelSilenceAllGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  appId?: string;
  requestParams?: CreateGroupRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: CreateGroupRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  result?: CreateGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      result: CreateGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomRequest extends $tea.Model {
  request?: CreateRoomRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: CreateRoomRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomResponseBody extends $tea.Model {
  success?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: CreateRoomResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'success',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: CreateRoomResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyRoomRequest extends $tea.Model {
  request?: DestroyRoomRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: DestroyRoomRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyRoomResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'RequestId',
      result: 'result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DestroyRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DestroyRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DismissGroupRequest extends $tea.Model {
  appId?: string;
  requestParams?: DismissGroupRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: DismissGroupRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DismissGroupShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DismissGroupResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DismissGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DismissGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DismissGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsRequest extends $tea.Model {
  appId?: string;
  requestParams?: GetGroupMemberByIdsRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: GetGroupMemberByIdsRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  result?: GetGroupMemberByIdsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      result: GetGroupMemberByIdsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetGroupMemberByIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetGroupMemberByIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenRequest extends $tea.Model {
  appId?: string;
  requestParams?: GetLoginTokenRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: GetLoginTokenRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  result?: GetLoginTokenResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      result: GetLoginTokenResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLoginTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLoginTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUploadUrlRequest extends $tea.Model {
  appId?: string;
  requestParams?: GetMediaUploadUrlRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: GetMediaUploadUrlRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUploadUrlShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUploadUrlResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  result?: GetMediaUploadUrlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      result: GetMediaUploadUrlResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUploadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMediaUploadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMediaUploadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUrlRequest extends $tea.Model {
  appId?: string;
  requestParams?: GetMediaUrlRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: GetMediaUrlRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUrlShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUrlResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  result?: GetMediaUrlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      result: GetMediaUrlResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMediaUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMediaUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageByIdRequest extends $tea.Model {
  appId?: string;
  requestParams?: GetMessageByIdRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: GetMessageByIdRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageByIdShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageByIdResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  result?: GetMessageByIdResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      result: GetMessageByIdResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMessageByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMessageByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatConversationRequest extends $tea.Model {
  appId?: string;
  requestParams?: ImportGroupChatConversationRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: ImportGroupChatConversationRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatConversationShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatConversationResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  result?: ImportGroupChatConversationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      result: ImportGroupChatConversationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatConversationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportGroupChatConversationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportGroupChatConversationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatMemberRequest extends $tea.Model {
  appId?: string;
  requestParams?: ImportGroupChatMemberRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: ImportGroupChatMemberRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatMemberShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatMemberResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportGroupChatMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportGroupChatMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageRequest extends $tea.Model {
  appId?: string;
  requestParams?: ImportMessageRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: ImportMessageRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  result?: ImportMessageResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      result: ImportMessageResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSingleConversationRequest extends $tea.Model {
  appId?: string;
  requestParams?: ImportSingleConversationRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: ImportSingleConversationRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSingleConversationShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSingleConversationResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSingleConversationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportSingleConversationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportSingleConversationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitTenantRequest extends $tea.Model {
  request?: InitTenantRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: InitTenantRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitTenantResponseBody extends $tea.Model {
  success?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'success',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      result: 'result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitTenantResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitTenantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitTenantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickOffRequest extends $tea.Model {
  appId?: string;
  requestParams?: KickOffRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: KickOffRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickOffShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickOffResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickOffResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: KickOffResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: KickOffResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupSilenceMembersRequest extends $tea.Model {
  appId?: string;
  requestParams?: ListGroupSilenceMembersRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: ListGroupSilenceMembersRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupSilenceMembersShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupSilenceMembersResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  result?: ListGroupSilenceMembersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      result: ListGroupSilenceMembersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupSilenceMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListGroupSilenceMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListGroupSilenceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallMessageRequest extends $tea.Model {
  appId?: string;
  requestParams?: RecallMessageRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RecallMessageRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallMessageShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallMessageResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecallMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecallMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveExtensionByKeysResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveGroupExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveGroupExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupExtensionByKeysResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveGroupExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveGroupExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMembersRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveGroupMembersRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveGroupMembersRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMembersShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMembersResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveGroupMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceBlacklistRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveGroupSilenceBlacklistRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveGroupSilenceBlacklistRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceBlacklistShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceBlacklistResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceBlacklistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveGroupSilenceBlacklistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveGroupSilenceBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceWhitelistRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveGroupSilenceWhitelistRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveGroupSilenceWhitelistRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceWhitelistShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceWhitelistResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveGroupSilenceWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveGroupSilenceWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessageExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveMessageExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveMessageExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessageExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessageExtensionByKeysResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessageExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveMessageExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveMessageExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSingleChatExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveSingleChatExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveSingleChatExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSingleChatExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSingleChatExtensionByKeysResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSingleChatExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveSingleChatExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveSingleChatExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserConversationExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveUserConversationExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveUserConversationExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserConversationExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserConversationExtensionByKeysResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserConversationExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveUserConversationExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveUserConversationExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserExtensionByKeysResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveUserExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveUserExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $tea.Model {
  appId?: string;
  requestParams?: SendMessageRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SendMessageRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  result?: SendMessageResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      result: SendMessageResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetExtensionByKeysResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: SetGroupExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SetGroupExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupExtensionByKeysResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetGroupExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetGroupExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: SetMessageExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SetMessageExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageExtensionByKeysResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetMessageExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetMessageExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSingleChatExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: SetSingleChatExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SetSingleChatExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSingleChatExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSingleChatExtensionByKeysResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSingleChatExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetSingleChatExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetSingleChatExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserConversationExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: SetUserConversationExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SetUserConversationExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserConversationExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserConversationExtensionByKeysResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserConversationExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetUserConversationExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetUserConversationExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserExtensionByKeysResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetUserExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetUserExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceAllGroupMembersRequest extends $tea.Model {
  appId?: string;
  requestParams?: SilenceAllGroupMembersRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SilenceAllGroupMembersRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceAllGroupMembersShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceAllGroupMembersResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceAllGroupMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SilenceAllGroupMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SilenceAllGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupIconRequest extends $tea.Model {
  appId?: string;
  requestParams?: UpdateGroupIconRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: UpdateGroupIconRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupIconShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupIconResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupIconResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGroupIconResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGroupIconResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMembersRoleRequest extends $tea.Model {
  appId?: string;
  requestParams?: UpdateGroupMembersRoleRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: UpdateGroupMembersRoleRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMembersRoleShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMembersRoleResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMembersRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGroupMembersRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGroupMembersRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupTitleRequest extends $tea.Model {
  appId?: string;
  requestParams?: UpdateGroupTitleRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: UpdateGroupTitleRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupTitleShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupTitleResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupTitleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGroupTitleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGroupTitleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantStatusRequest extends $tea.Model {
  request?: UpdateTenantStatusRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: UpdateTenantStatusRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantStatusResponseBody extends $tea.Model {
  success?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'success',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      result: 'result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTenantStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTenantStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultImportMessageResultValue extends $tea.Model {
  result?: number;
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      msgId: 'msgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'number',
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestParamsUserConversationsValue extends $tea.Model {
  top?: boolean;
  redPoint?: number;
  mute?: boolean;
  visible?: boolean;
  createTime?: number;
  modifyTime?: number;
  userExtensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      redPoint: 'RedPoint',
      mute: 'Mute',
      visible: 'Visible',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      userExtensions: 'UserExtensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'boolean',
      redPoint: 'number',
      mute: 'boolean',
      visible: 'boolean',
      createTime: 'number',
      modifyTime: 'number',
      userExtensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestParamsOptionsSingleChatCreateRequestUserConversationValue extends $tea.Model {
  userExtensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      userExtensions: 'UserExtensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userExtensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMembersRequestRequestParamsInitMembers extends $tea.Model {
  appUid?: string;
  role?: number;
  nick?: string;
  joinTime?: number;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      role: 'Role',
      nick: 'Nick',
      joinTime: 'JoinTime',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      role: 'number',
      nick: 'string',
      joinTime: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMembersRequestRequestParams extends $tea.Model {
  operatorAppUid?: string;
  appCid?: string;
  initMembers?: AddGroupMembersRequestRequestParamsInitMembers[];
  static names(): { [key: string]: string } {
    return {
      operatorAppUid: 'OperatorAppUid',
      appCid: 'AppCid',
      initMembers: 'InitMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorAppUid: 'string',
      appCid: 'string',
      initMembers: { 'type': 'array', 'itemType': AddGroupMembersRequestRequestParamsInitMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceBlacklistRequestRequestParams extends $tea.Model {
  operatorAppUid?: string;
  appCid?: string;
  members?: string[];
  silenceDuration?: number;
  static names(): { [key: string]: string } {
    return {
      operatorAppUid: 'OperatorAppUid',
      appCid: 'AppCid',
      members: 'Members',
      silenceDuration: 'SilenceDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorAppUid: 'string',
      appCid: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
      silenceDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceWhitelistRequestRequestParams extends $tea.Model {
  operatorAppUid?: string;
  appCid?: string;
  members?: string[];
  static names(): { [key: string]: string } {
    return {
      operatorAppUid: 'OperatorAppUid',
      appCid: 'AppCid',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorAppUid: 'string',
      appCid: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSilenceAllGroupMembersRequestRequestParams extends $tea.Model {
  appCid?: string;
  operatorAppUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      operatorAppUid: 'OperatorAppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      operatorAppUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequestRequestParamsInitMembers extends $tea.Model {
  appUid?: string;
  role?: number;
  nick?: string;
  joinTime?: number;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      role: 'Role',
      nick: 'Nick',
      joinTime: 'JoinTime',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      role: 'number',
      nick: 'string',
      joinTime: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequestRequestParams extends $tea.Model {
  uuid?: string;
  creatorAppUid?: string;
  title?: string;
  iconMediaId?: string;
  extensions?: { [key: string]: string };
  initMembers?: CreateGroupRequestRequestParamsInitMembers[];
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      creatorAppUid: 'CreatorAppUid',
      title: 'Title',
      iconMediaId: 'IconMediaId',
      extensions: 'Extensions',
      initMembers: 'InitMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      creatorAppUid: 'string',
      title: 'string',
      iconMediaId: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      initMembers: { 'type': 'array', 'itemType': CreateGroupRequestRequestParamsInitMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBodyResult extends $tea.Model {
  appCid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomRequestRequest extends $tea.Model {
  domain?: string;
  ownerId?: string;
  ownerNick?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      ownerId: 'ownerId',
      ownerNick: 'ownerNick',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ownerId: 'string',
      ownerNick: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomResponseBodyResult extends $tea.Model {
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      roomId: 'roomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyRoomRequestRequest extends $tea.Model {
  domain?: string;
  roomId?: string;
  openId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      roomId: 'roomId',
      openId: 'openId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      roomId: 'string',
      openId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DismissGroupRequestRequestParams extends $tea.Model {
  operatorAppUid?: string;
  appCid?: string;
  static names(): { [key: string]: string } {
    return {
      operatorAppUid: 'OperatorAppUid',
      appCid: 'AppCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorAppUid: 'string',
      appCid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsRequestRequestParams extends $tea.Model {
  appCid?: string;
  appUids?: string[];
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUids: 'AppUids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsResponseBodyResultMembers extends $tea.Model {
  appUid?: string;
  role?: number;
  nick?: string;
  joinTime?: number;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      role: 'Role',
      nick: 'Nick',
      joinTime: 'JoinTime',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      role: 'number',
      nick: 'string',
      joinTime: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsResponseBodyResult extends $tea.Model {
  members?: GetGroupMemberByIdsResponseBodyResultMembers[];
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': GetGroupMemberByIdsResponseBodyResultMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenRequestRequestParams extends $tea.Model {
  appUid?: string;
  appKey?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      appKey: 'AppKey',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      appKey: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBodyResult extends $tea.Model {
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpiredTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      refreshToken: 'RefreshToken',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      refreshToken: 'string',
      accessTokenExpiredTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUploadUrlRequestRequestParams extends $tea.Model {
  type?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUploadUrlResponseBodyResult extends $tea.Model {
  uploadUrl?: string;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      uploadUrl: 'UploadUrl',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadUrl: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUrlRequestRequestParams extends $tea.Model {
  mediaId?: string;
  urlExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      urlExpireTime: 'UrlExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      urlExpireTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUrlResponseBodyResult extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageByIdRequestRequestParams extends $tea.Model {
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageByIdResponseBodyResult extends $tea.Model {
  msgId?: string;
  appCid?: string;
  conversationType?: number;
  createTime?: number;
  senderId?: string;
  contentType?: number;
  content?: string;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
      appCid: 'AppCid',
      conversationType: 'ConversationType',
      createTime: 'CreateTime',
      senderId: 'SenderId',
      contentType: 'ContentType',
      content: 'Content',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
      appCid: 'string',
      conversationType: 'number',
      createTime: 'number',
      senderId: 'string',
      contentType: 'number',
      content: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatConversationRequestRequestParams extends $tea.Model {
  uuid?: string;
  ownerAppUid?: string;
  title?: string;
  iconMediaId?: string;
  memberLimit?: number;
  extensions?: { [key: string]: string };
  createTime?: number;
  silenceAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      ownerAppUid: 'OwnerAppUid',
      title: 'Title',
      iconMediaId: 'IconMediaId',
      memberLimit: 'MemberLimit',
      extensions: 'Extensions',
      createTime: 'CreateTime',
      silenceAll: 'SilenceAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      ownerAppUid: 'string',
      title: 'string',
      iconMediaId: 'string',
      memberLimit: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'number',
      silenceAll: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatConversationResponseBodyResult extends $tea.Model {
  appCid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatMemberRequestRequestParamsGroupChatMembers extends $tea.Model {
  appUid?: string;
  role?: number;
  nick?: string;
  top?: boolean;
  redPoint?: number;
  mute?: boolean;
  visible?: boolean;
  joinTime?: number;
  modifyTime?: number;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      role: 'Role',
      nick: 'Nick',
      top: 'Top',
      redPoint: 'RedPoint',
      mute: 'Mute',
      visible: 'Visible',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      role: 'number',
      nick: 'string',
      top: 'boolean',
      redPoint: 'number',
      mute: 'boolean',
      visible: 'boolean',
      joinTime: 'number',
      modifyTime: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatMemberRequestRequestParams extends $tea.Model {
  appCid?: string;
  groupChatMembers?: ImportGroupChatMemberRequestRequestParamsGroupChatMembers[];
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      groupChatMembers: 'GroupChatMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      groupChatMembers: { 'type': 'array', 'itemType': ImportGroupChatMemberRequestRequestParamsGroupChatMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageRequestRequestParamsMessages extends $tea.Model {
  uuid?: string;
  appCid?: string;
  conversationType?: number;
  senderId?: string;
  receiverIds?: string[];
  contentType?: number;
  content?: string;
  createTime?: number;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      appCid: 'AppCid',
      conversationType: 'ConversationType',
      senderId: 'SenderId',
      receiverIds: 'ReceiverIds',
      contentType: 'ContentType',
      content: 'Content',
      createTime: 'CreateTime',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      appCid: 'string',
      conversationType: 'number',
      senderId: 'string',
      receiverIds: { 'type': 'array', 'itemType': 'string' },
      contentType: 'number',
      content: 'string',
      createTime: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageRequestRequestParams extends $tea.Model {
  messages?: ImportMessageRequestRequestParamsMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': ImportMessageRequestRequestParamsMessages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageResponseBodyResult extends $tea.Model {
  importMessageResult?: { [key: string]: ResultImportMessageResultValue };
  static names(): { [key: string]: string } {
    return {
      importMessageResult: 'ImportMessageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importMessageResult: { 'type': 'map', 'keyType': 'string', 'valueType': ResultImportMessageResultValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSingleConversationRequestRequestParamsConversation extends $tea.Model {
  appCid?: string;
  appUids?: string[];
  extensions?: { [key: string]: string };
  createTime?: number;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUids: 'AppUids',
      extensions: 'Extensions',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUids: { 'type': 'array', 'itemType': 'string' },
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSingleConversationRequestRequestParams extends $tea.Model {
  conversation?: ImportSingleConversationRequestRequestParamsConversation;
  userConversations?: { [key: string]: RequestParamsUserConversationsValue };
  static names(): { [key: string]: string } {
    return {
      conversation: 'Conversation',
      userConversations: 'UserConversations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversation: ImportSingleConversationRequestRequestParamsConversation,
      userConversations: { 'type': 'map', 'keyType': 'string', 'valueType': RequestParamsUserConversationsValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitTenantRequestRequest extends $tea.Model {
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickOffRequestRequestParams extends $tea.Model {
  appUid?: string;
  appKeys?: string[];
  information?: string;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      appKeys: 'AppKeys',
      information: 'Information',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      appKeys: { 'type': 'array', 'itemType': 'string' },
      information: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupSilenceMembersRequestRequestParams extends $tea.Model {
  operatorAppUid?: string;
  appCid?: string;
  static names(): { [key: string]: string } {
    return {
      operatorAppUid: 'OperatorAppUid',
      appCid: 'AppCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorAppUid: 'string',
      appCid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupSilenceMembersResponseBodyResult extends $tea.Model {
  appCid?: string;
  whitelist?: string[];
  blacklist?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      whitelist: 'Whitelist',
      blacklist: 'Blacklist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      whitelist: { 'type': 'array', 'itemType': 'string' },
      blacklist: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallMessageRequestRequestParams extends $tea.Model {
  appUid?: string;
  appCid?: string;
  msgId?: string;
  type?: number;
  operatorType?: number;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      appCid: 'AppCid',
      msgId: 'MsgId',
      type: 'Type',
      operatorType: 'OperatorType',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      appCid: 'string',
      msgId: 'string',
      type: 'number',
      operatorType: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMembersRequestRequestParams extends $tea.Model {
  operatorAppUid?: string;
  appCid?: string;
  appUidsRemoved?: string[];
  static names(): { [key: string]: string } {
    return {
      operatorAppUid: 'OperatorAppUid',
      appCid: 'AppCid',
      appUidsRemoved: 'AppUidsRemoved',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorAppUid: 'string',
      appCid: 'string',
      appUidsRemoved: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceBlacklistRequestRequestParams extends $tea.Model {
  operatorAppUid?: string;
  appCid?: string;
  members?: string[];
  static names(): { [key: string]: string } {
    return {
      operatorAppUid: 'OperatorAppUid',
      appCid: 'AppCid',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorAppUid: 'string',
      appCid: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceWhitelistRequestRequestParams extends $tea.Model {
  operatorAppUid?: string;
  appCid?: string;
  members?: string[];
  static names(): { [key: string]: string } {
    return {
      operatorAppUid: 'OperatorAppUid',
      appCid: 'AppCid',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorAppUid: 'string',
      appCid: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessageExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  msgId?: string;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      msgId: 'MsgId',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      msgId: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSingleChatExtensionByKeysRequestRequestParams extends $tea.Model {
  appUid?: string;
  appCid?: string;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      appCid: 'AppCid',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      appCid: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserConversationExtensionByKeysRequestRequestParams extends $tea.Model {
  appUid?: string;
  appCid?: string;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      appCid: 'AppCid',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      appCid: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequestRequestParamsOptionsReceiveScopeOption extends $tea.Model {
  receiverIds?: string[];
  excludeReceiverIds?: string[];
  receiveScope?: number;
  static names(): { [key: string]: string } {
    return {
      receiverIds: 'ReceiverIds',
      excludeReceiverIds: 'ExcludeReceiverIds',
      receiveScope: 'ReceiveScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiverIds: { 'type': 'array', 'itemType': 'string' },
      excludeReceiverIds: { 'type': 'array', 'itemType': 'string' },
      receiveScope: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequestRequestParamsOptionsSingleChatCreateRequest extends $tea.Model {
  appCid?: string;
  appUids?: string[];
  extensions?: { [key: string]: string };
  userConversation?: { [key: string]: RequestParamsOptionsSingleChatCreateRequestUserConversationValue };
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUids: 'AppUids',
      extensions: 'Extensions',
      userConversation: 'UserConversation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUids: { 'type': 'array', 'itemType': 'string' },
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userConversation: { 'type': 'map', 'keyType': 'string', 'valueType': RequestParamsOptionsSingleChatCreateRequestUserConversationValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequestRequestParamsOptions extends $tea.Model {
  redPointPolicy?: number;
  receiveScopeOption?: SendMessageRequestRequestParamsOptionsReceiveScopeOption;
  singleChatCreateRequest?: SendMessageRequestRequestParamsOptionsSingleChatCreateRequest;
  static names(): { [key: string]: string } {
    return {
      redPointPolicy: 'RedPointPolicy',
      receiveScopeOption: 'ReceiveScopeOption',
      singleChatCreateRequest: 'SingleChatCreateRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redPointPolicy: 'number',
      receiveScopeOption: SendMessageRequestRequestParamsOptionsReceiveScopeOption,
      singleChatCreateRequest: SendMessageRequestRequestParamsOptionsSingleChatCreateRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequestRequestParams extends $tea.Model {
  uuid?: string;
  appCid?: string;
  conversationType?: number;
  senderId?: string;
  contentType?: number;
  content?: string;
  extensions?: { [key: string]: string };
  options?: SendMessageRequestRequestParamsOptions;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      appCid: 'AppCid',
      conversationType: 'ConversationType',
      senderId: 'SenderId',
      contentType: 'ContentType',
      content: 'Content',
      extensions: 'Extensions',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      appCid: 'string',
      conversationType: 'number',
      senderId: 'string',
      contentType: 'number',
      content: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      options: SendMessageRequestRequestParamsOptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBodyResult extends $tea.Model {
  msgId?: string;
  createTime?: number;
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
      createTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  msgId?: string;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      msgId: 'MsgId',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      msgId: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSingleChatExtensionByKeysRequestRequestParams extends $tea.Model {
  appUid?: string;
  appCid?: string;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      appCid: 'AppCid',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      appCid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserConversationExtensionByKeysRequestRequestParams extends $tea.Model {
  appUid?: string;
  appCid?: string;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      appCid: 'AppCid',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      appCid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceAllGroupMembersRequestRequestParams extends $tea.Model {
  appCid?: string;
  operatorAppUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      operatorAppUid: 'OperatorAppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      operatorAppUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupIconRequestRequestParams extends $tea.Model {
  appCid?: string;
  operatorAppUid?: string;
  iconMediaId?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      operatorAppUid: 'OperatorAppUid',
      iconMediaId: 'IconMediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      operatorAppUid: 'string',
      iconMediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMembersRoleRequestRequestParams extends $tea.Model {
  appCid?: string;
  operatorAppUid?: string;
  rrole?: number;
  appUids?: string[];
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      operatorAppUid: 'OperatorAppUid',
      rrole: 'Rrole',
      appUids: 'AppUids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      operatorAppUid: 'string',
      rrole: 'number',
      appUids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupTitleRequestRequestParams extends $tea.Model {
  appCid?: string;
  operatorAppUid?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      operatorAppUid: 'OperatorAppUid',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      operatorAppUid: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantStatusRequestRequest extends $tea.Model {
  domain?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("live-interaction", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async addGroupMembersWithOptions(tmpReq: AddGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<AddGroupMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new AddGroupMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddGroupMembersResponse>(await this.doRPCRequest("AddGroupMembers", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new AddGroupMembersResponse({}));
  }

  async addGroupMembers(request: AddGroupMembersRequest): Promise<AddGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGroupMembersWithOptions(request, runtime);
  }

  async addGroupSilenceBlacklistWithOptions(tmpReq: AddGroupSilenceBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<AddGroupSilenceBlacklistResponse> {
    Util.validateModel(tmpReq);
    let request = new AddGroupSilenceBlacklistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddGroupSilenceBlacklistResponse>(await this.doRPCRequest("AddGroupSilenceBlacklist", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new AddGroupSilenceBlacklistResponse({}));
  }

  async addGroupSilenceBlacklist(request: AddGroupSilenceBlacklistRequest): Promise<AddGroupSilenceBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGroupSilenceBlacklistWithOptions(request, runtime);
  }

  async addGroupSilenceWhitelistWithOptions(tmpReq: AddGroupSilenceWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<AddGroupSilenceWhitelistResponse> {
    Util.validateModel(tmpReq);
    let request = new AddGroupSilenceWhitelistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddGroupSilenceWhitelistResponse>(await this.doRPCRequest("AddGroupSilenceWhitelist", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new AddGroupSilenceWhitelistResponse({}));
  }

  async addGroupSilenceWhitelist(request: AddGroupSilenceWhitelistRequest): Promise<AddGroupSilenceWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGroupSilenceWhitelistWithOptions(request, runtime);
  }

  async cancelSilenceAllGroupMembersWithOptions(tmpReq: CancelSilenceAllGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<CancelSilenceAllGroupMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new CancelSilenceAllGroupMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelSilenceAllGroupMembersResponse>(await this.doRPCRequest("CancelSilenceAllGroupMembers", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new CancelSilenceAllGroupMembersResponse({}));
  }

  async cancelSilenceAllGroupMembers(request: CancelSilenceAllGroupMembersRequest): Promise<CancelSilenceAllGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelSilenceAllGroupMembersWithOptions(request, runtime);
  }

  async createGroupWithOptions(tmpReq: CreateGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGroupResponse>(await this.doRPCRequest("CreateGroup", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGroupResponse({}));
  }

  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  async createRoomWithOptions(request: CreateRoomRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRoomResponse>(await this.doRPCRequest("CreateRoom", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRoomResponse({}));
  }

  async createRoom(request: CreateRoomRequest): Promise<CreateRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoomWithOptions(request, runtime);
  }

  async destroyRoomWithOptions(request: DestroyRoomRequest, runtime: $Util.RuntimeOptions): Promise<DestroyRoomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DestroyRoomResponse>(await this.doRPCRequest("DestroyRoom", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DestroyRoomResponse({}));
  }

  async destroyRoom(request: DestroyRoomRequest): Promise<DestroyRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.destroyRoomWithOptions(request, runtime);
  }

  async dismissGroupWithOptions(tmpReq: DismissGroupRequest, runtime: $Util.RuntimeOptions): Promise<DismissGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new DismissGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DismissGroupResponse>(await this.doRPCRequest("DismissGroup", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DismissGroupResponse({}));
  }

  async dismissGroup(request: DismissGroupRequest): Promise<DismissGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dismissGroupWithOptions(request, runtime);
  }

  async getGroupMemberByIdsWithOptions(tmpReq: GetGroupMemberByIdsRequest, runtime: $Util.RuntimeOptions): Promise<GetGroupMemberByIdsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetGroupMemberByIdsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetGroupMemberByIdsResponse>(await this.doRPCRequest("GetGroupMemberByIds", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetGroupMemberByIdsResponse({}));
  }

  async getGroupMemberByIds(request: GetGroupMemberByIdsRequest): Promise<GetGroupMemberByIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupMemberByIdsWithOptions(request, runtime);
  }

  async getLoginTokenWithOptions(tmpReq: GetLoginTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginTokenResponse> {
    Util.validateModel(tmpReq);
    let request = new GetLoginTokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLoginTokenResponse>(await this.doRPCRequest("GetLoginToken", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetLoginTokenResponse({}));
  }

  async getLoginToken(request: GetLoginTokenRequest): Promise<GetLoginTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginTokenWithOptions(request, runtime);
  }

  async getMediaUploadUrlWithOptions(tmpReq: GetMediaUploadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaUploadUrlResponse> {
    Util.validateModel(tmpReq);
    let request = new GetMediaUploadUrlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMediaUploadUrlResponse>(await this.doRPCRequest("GetMediaUploadUrl", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetMediaUploadUrlResponse({}));
  }

  async getMediaUploadUrl(request: GetMediaUploadUrlRequest): Promise<GetMediaUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaUploadUrlWithOptions(request, runtime);
  }

  async getMediaUrlWithOptions(tmpReq: GetMediaUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaUrlResponse> {
    Util.validateModel(tmpReq);
    let request = new GetMediaUrlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMediaUrlResponse>(await this.doRPCRequest("GetMediaUrl", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetMediaUrlResponse({}));
  }

  async getMediaUrl(request: GetMediaUrlRequest): Promise<GetMediaUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaUrlWithOptions(request, runtime);
  }

  async getMessageByIdWithOptions(tmpReq: GetMessageByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetMessageByIdResponse> {
    Util.validateModel(tmpReq);
    let request = new GetMessageByIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMessageByIdResponse>(await this.doRPCRequest("GetMessageById", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetMessageByIdResponse({}));
  }

  async getMessageById(request: GetMessageByIdRequest): Promise<GetMessageByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMessageByIdWithOptions(request, runtime);
  }

  async importGroupChatConversationWithOptions(tmpReq: ImportGroupChatConversationRequest, runtime: $Util.RuntimeOptions): Promise<ImportGroupChatConversationResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportGroupChatConversationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportGroupChatConversationResponse>(await this.doRPCRequest("ImportGroupChatConversation", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new ImportGroupChatConversationResponse({}));
  }

  async importGroupChatConversation(request: ImportGroupChatConversationRequest): Promise<ImportGroupChatConversationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importGroupChatConversationWithOptions(request, runtime);
  }

  async importGroupChatMemberWithOptions(tmpReq: ImportGroupChatMemberRequest, runtime: $Util.RuntimeOptions): Promise<ImportGroupChatMemberResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportGroupChatMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportGroupChatMemberResponse>(await this.doRPCRequest("ImportGroupChatMember", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new ImportGroupChatMemberResponse({}));
  }

  async importGroupChatMember(request: ImportGroupChatMemberRequest): Promise<ImportGroupChatMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importGroupChatMemberWithOptions(request, runtime);
  }

  async importMessageWithOptions(tmpReq: ImportMessageRequest, runtime: $Util.RuntimeOptions): Promise<ImportMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportMessageResponse>(await this.doRPCRequest("ImportMessage", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new ImportMessageResponse({}));
  }

  async importMessage(request: ImportMessageRequest): Promise<ImportMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importMessageWithOptions(request, runtime);
  }

  async importSingleConversationWithOptions(tmpReq: ImportSingleConversationRequest, runtime: $Util.RuntimeOptions): Promise<ImportSingleConversationResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportSingleConversationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportSingleConversationResponse>(await this.doRPCRequest("ImportSingleConversation", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new ImportSingleConversationResponse({}));
  }

  async importSingleConversation(request: ImportSingleConversationRequest): Promise<ImportSingleConversationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importSingleConversationWithOptions(request, runtime);
  }

  async initTenantWithOptions(request: InitTenantRequest, runtime: $Util.RuntimeOptions): Promise<InitTenantResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InitTenantResponse>(await this.doRPCRequest("InitTenant", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new InitTenantResponse({}));
  }

  async initTenant(request: InitTenantRequest): Promise<InitTenantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initTenantWithOptions(request, runtime);
  }

  async kickOffWithOptions(tmpReq: KickOffRequest, runtime: $Util.RuntimeOptions): Promise<KickOffResponse> {
    Util.validateModel(tmpReq);
    let request = new KickOffShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<KickOffResponse>(await this.doRPCRequest("KickOff", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new KickOffResponse({}));
  }

  async kickOff(request: KickOffRequest): Promise<KickOffResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.kickOffWithOptions(request, runtime);
  }

  async listGroupSilenceMembersWithOptions(tmpReq: ListGroupSilenceMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupSilenceMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListGroupSilenceMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListGroupSilenceMembersResponse>(await this.doRPCRequest("ListGroupSilenceMembers", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new ListGroupSilenceMembersResponse({}));
  }

  async listGroupSilenceMembers(request: ListGroupSilenceMembersRequest): Promise<ListGroupSilenceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupSilenceMembersWithOptions(request, runtime);
  }

  async recallMessageWithOptions(tmpReq: RecallMessageRequest, runtime: $Util.RuntimeOptions): Promise<RecallMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new RecallMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecallMessageResponse>(await this.doRPCRequest("RecallMessage", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RecallMessageResponse({}));
  }

  async recallMessage(request: RecallMessageRequest): Promise<RecallMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recallMessageWithOptions(request, runtime);
  }

  async removeExtensionByKeysWithOptions(request: RemoveExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<RemoveExtensionByKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveExtensionByKeysResponse>(await this.doRPCRequest("RemoveExtensionByKeys", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveExtensionByKeysResponse({}));
  }

  async removeExtensionByKeys(request: RemoveExtensionByKeysRequest): Promise<RemoveExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeExtensionByKeysWithOptions(request, runtime);
  }

  async removeGroupExtensionByKeysWithOptions(tmpReq: RemoveGroupExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<RemoveGroupExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveGroupExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveGroupExtensionByKeysResponse>(await this.doRPCRequest("RemoveGroupExtensionByKeys", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveGroupExtensionByKeysResponse({}));
  }

  async removeGroupExtensionByKeys(request: RemoveGroupExtensionByKeysRequest): Promise<RemoveGroupExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeGroupExtensionByKeysWithOptions(request, runtime);
  }

  async removeGroupMembersWithOptions(tmpReq: RemoveGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveGroupMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveGroupMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveGroupMembersResponse>(await this.doRPCRequest("RemoveGroupMembers", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveGroupMembersResponse({}));
  }

  async removeGroupMembers(request: RemoveGroupMembersRequest): Promise<RemoveGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeGroupMembersWithOptions(request, runtime);
  }

  async removeGroupSilenceBlacklistWithOptions(tmpReq: RemoveGroupSilenceBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<RemoveGroupSilenceBlacklistResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveGroupSilenceBlacklistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveGroupSilenceBlacklistResponse>(await this.doRPCRequest("RemoveGroupSilenceBlacklist", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveGroupSilenceBlacklistResponse({}));
  }

  async removeGroupSilenceBlacklist(request: RemoveGroupSilenceBlacklistRequest): Promise<RemoveGroupSilenceBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeGroupSilenceBlacklistWithOptions(request, runtime);
  }

  async removeGroupSilenceWhitelistWithOptions(tmpReq: RemoveGroupSilenceWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<RemoveGroupSilenceWhitelistResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveGroupSilenceWhitelistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveGroupSilenceWhitelistResponse>(await this.doRPCRequest("RemoveGroupSilenceWhitelist", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveGroupSilenceWhitelistResponse({}));
  }

  async removeGroupSilenceWhitelist(request: RemoveGroupSilenceWhitelistRequest): Promise<RemoveGroupSilenceWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeGroupSilenceWhitelistWithOptions(request, runtime);
  }

  async removeMessageExtensionByKeysWithOptions(tmpReq: RemoveMessageExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<RemoveMessageExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveMessageExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveMessageExtensionByKeysResponse>(await this.doRPCRequest("RemoveMessageExtensionByKeys", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveMessageExtensionByKeysResponse({}));
  }

  async removeMessageExtensionByKeys(request: RemoveMessageExtensionByKeysRequest): Promise<RemoveMessageExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeMessageExtensionByKeysWithOptions(request, runtime);
  }

  async removeSingleChatExtensionByKeysWithOptions(tmpReq: RemoveSingleChatExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<RemoveSingleChatExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveSingleChatExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveSingleChatExtensionByKeysResponse>(await this.doRPCRequest("RemoveSingleChatExtensionByKeys", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveSingleChatExtensionByKeysResponse({}));
  }

  async removeSingleChatExtensionByKeys(request: RemoveSingleChatExtensionByKeysRequest): Promise<RemoveSingleChatExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeSingleChatExtensionByKeysWithOptions(request, runtime);
  }

  async removeUserConversationExtensionByKeysWithOptions(tmpReq: RemoveUserConversationExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserConversationExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveUserConversationExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveUserConversationExtensionByKeysResponse>(await this.doRPCRequest("RemoveUserConversationExtensionByKeys", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveUserConversationExtensionByKeysResponse({}));
  }

  async removeUserConversationExtensionByKeys(request: RemoveUserConversationExtensionByKeysRequest): Promise<RemoveUserConversationExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserConversationExtensionByKeysWithOptions(request, runtime);
  }

  async removeUserExtensionByKeysWithOptions(request: RemoveUserExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserExtensionByKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveUserExtensionByKeysResponse>(await this.doRPCRequest("RemoveUserExtensionByKeys", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveUserExtensionByKeysResponse({}));
  }

  async removeUserExtensionByKeys(request: RemoveUserExtensionByKeysRequest): Promise<RemoveUserExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserExtensionByKeysWithOptions(request, runtime);
  }

  async sendMessageWithOptions(tmpReq: SendMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new SendMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendMessageResponse>(await this.doRPCRequest("SendMessage", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SendMessageResponse({}));
  }

  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageWithOptions(request, runtime);
  }

  async setExtensionByKeysWithOptions(request: SetExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<SetExtensionByKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetExtensionByKeysResponse>(await this.doRPCRequest("SetExtensionByKeys", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetExtensionByKeysResponse({}));
  }

  async setExtensionByKeys(request: SetExtensionByKeysRequest): Promise<SetExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setExtensionByKeysWithOptions(request, runtime);
  }

  async setGroupExtensionByKeysWithOptions(tmpReq: SetGroupExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<SetGroupExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new SetGroupExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetGroupExtensionByKeysResponse>(await this.doRPCRequest("SetGroupExtensionByKeys", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetGroupExtensionByKeysResponse({}));
  }

  async setGroupExtensionByKeys(request: SetGroupExtensionByKeysRequest): Promise<SetGroupExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGroupExtensionByKeysWithOptions(request, runtime);
  }

  async setMessageExtensionByKeysWithOptions(tmpReq: SetMessageExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<SetMessageExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new SetMessageExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetMessageExtensionByKeysResponse>(await this.doRPCRequest("SetMessageExtensionByKeys", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetMessageExtensionByKeysResponse({}));
  }

  async setMessageExtensionByKeys(request: SetMessageExtensionByKeysRequest): Promise<SetMessageExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setMessageExtensionByKeysWithOptions(request, runtime);
  }

  async setSingleChatExtensionByKeysWithOptions(tmpReq: SetSingleChatExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<SetSingleChatExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new SetSingleChatExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetSingleChatExtensionByKeysResponse>(await this.doRPCRequest("SetSingleChatExtensionByKeys", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetSingleChatExtensionByKeysResponse({}));
  }

  async setSingleChatExtensionByKeys(request: SetSingleChatExtensionByKeysRequest): Promise<SetSingleChatExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSingleChatExtensionByKeysWithOptions(request, runtime);
  }

  async setUserConversationExtensionByKeysWithOptions(tmpReq: SetUserConversationExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<SetUserConversationExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new SetUserConversationExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetUserConversationExtensionByKeysResponse>(await this.doRPCRequest("SetUserConversationExtensionByKeys", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetUserConversationExtensionByKeysResponse({}));
  }

  async setUserConversationExtensionByKeys(request: SetUserConversationExtensionByKeysRequest): Promise<SetUserConversationExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setUserConversationExtensionByKeysWithOptions(request, runtime);
  }

  async setUserExtensionByKeysWithOptions(request: SetUserExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<SetUserExtensionByKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetUserExtensionByKeysResponse>(await this.doRPCRequest("SetUserExtensionByKeys", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetUserExtensionByKeysResponse({}));
  }

  async setUserExtensionByKeys(request: SetUserExtensionByKeysRequest): Promise<SetUserExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setUserExtensionByKeysWithOptions(request, runtime);
  }

  async silenceAllGroupMembersWithOptions(tmpReq: SilenceAllGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<SilenceAllGroupMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new SilenceAllGroupMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SilenceAllGroupMembersResponse>(await this.doRPCRequest("SilenceAllGroupMembers", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SilenceAllGroupMembersResponse({}));
  }

  async silenceAllGroupMembers(request: SilenceAllGroupMembersRequest): Promise<SilenceAllGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.silenceAllGroupMembersWithOptions(request, runtime);
  }

  async updateGroupIconWithOptions(tmpReq: UpdateGroupIconRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupIconResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGroupIconShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGroupIconResponse>(await this.doRPCRequest("UpdateGroupIcon", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGroupIconResponse({}));
  }

  async updateGroupIcon(request: UpdateGroupIconRequest): Promise<UpdateGroupIconResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupIconWithOptions(request, runtime);
  }

  async updateGroupMembersRoleWithOptions(tmpReq: UpdateGroupMembersRoleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupMembersRoleResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGroupMembersRoleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGroupMembersRoleResponse>(await this.doRPCRequest("UpdateGroupMembersRole", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGroupMembersRoleResponse({}));
  }

  async updateGroupMembersRole(request: UpdateGroupMembersRoleRequest): Promise<UpdateGroupMembersRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupMembersRoleWithOptions(request, runtime);
  }

  async updateGroupTitleWithOptions(tmpReq: UpdateGroupTitleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupTitleResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGroupTitleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGroupTitleResponse>(await this.doRPCRequest("UpdateGroupTitle", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGroupTitleResponse({}));
  }

  async updateGroupTitle(request: UpdateGroupTitleRequest): Promise<UpdateGroupTitleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupTitleWithOptions(request, runtime);
  }

  async updateTenantStatusWithOptions(request: UpdateTenantStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTenantStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTenantStatusResponse>(await this.doRPCRequest("UpdateTenantStatus", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTenantStatusResponse({}));
  }

  async updateTenantStatus(request: UpdateTenantStatusRequest): Promise<UpdateTenantStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTenantStatusWithOptions(request, runtime);
  }

}
