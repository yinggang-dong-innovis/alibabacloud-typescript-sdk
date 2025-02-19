// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import RPC, * as $RPC from '@alicloud/rpc-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class ToneSdrVideoRequest extends $tea.Model {
  videoURL?: string;
  bitrate?: number;
  recolorModel?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
      bitrate: 'Bitrate',
      recolorModel: 'RecolorModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
      bitrate: 'number',
      recolorModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToneSdrVideoAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  bitrate?: number;
  recolorModel?: string;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      bitrate: 'Bitrate',
      recolorModel: 'RecolorModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      bitrate: 'number',
      recolorModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToneSdrVideoResponseBody extends $tea.Model {
  requestId?: string;
  data?: ToneSdrVideoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ToneSdrVideoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToneSdrVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ToneSdrVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ToneSdrVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityRequest extends $tea.Model {
  videoURL?: string;
  outPutWidth?: number;
  outPutHeight?: number;
  frameRate?: number;
  HDRFormat?: string;
  maxIlluminance?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
      outPutWidth: 'OutPutWidth',
      outPutHeight: 'OutPutHeight',
      frameRate: 'FrameRate',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      bitrate: 'Bitrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
      outPutWidth: 'number',
      outPutHeight: 'number',
      frameRate: 'number',
      HDRFormat: 'string',
      maxIlluminance: 'number',
      bitrate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  outPutWidth?: number;
  outPutHeight?: number;
  frameRate?: number;
  HDRFormat?: string;
  maxIlluminance?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      outPutWidth: 'OutPutWidth',
      outPutHeight: 'OutPutHeight',
      frameRate: 'FrameRate',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      bitrate: 'Bitrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      outPutWidth: 'number',
      outPutHeight: 'number',
      frameRate: 'number',
      HDRFormat: 'string',
      maxIlluminance: 'number',
      bitrate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityResponseBody extends $tea.Model {
  requestId?: string;
  data?: EnhanceVideoQualityResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EnhanceVideoQualityResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnhanceVideoQualityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnhanceVideoQualityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterpolateVideoFrameRequest extends $tea.Model {
  videoURL?: string;
  frameRate?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
      frameRate: 'FrameRate',
      bitrate: 'Bitrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
      frameRate: 'number',
      bitrate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterpolateVideoFrameAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  frameRate?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      frameRate: 'FrameRate',
      bitrate: 'Bitrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      frameRate: 'number',
      bitrate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterpolateVideoFrameResponseBody extends $tea.Model {
  requestId?: string;
  data?: InterpolateVideoFrameResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: InterpolateVideoFrameResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterpolateVideoFrameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InterpolateVideoFrameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InterpolateVideoFrameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoRequest extends $tea.Model {
  videoUrl?: string;
  boxes?: EraseVideoLogoRequestBoxes[];
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      boxes: 'Boxes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      boxes: { 'type': 'array', 'itemType': EraseVideoLogoRequestBoxes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  boxes?: EraseVideoLogoAdvanceRequestBoxes[];
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      boxes: 'Boxes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      boxes: { 'type': 'array', 'itemType': EraseVideoLogoAdvanceRequestBoxes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoResponseBody extends $tea.Model {
  requestId?: string;
  data?: EraseVideoLogoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EraseVideoLogoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EraseVideoLogoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EraseVideoLogoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHdrVideoRequest extends $tea.Model {
  videoURL?: string;
  HDRFormat?: string;
  maxIlluminance?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      bitrate: 'Bitrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
      HDRFormat: 'string',
      maxIlluminance: 'number',
      bitrate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHdrVideoAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  HDRFormat?: string;
  maxIlluminance?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      bitrate: 'Bitrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      HDRFormat: 'string',
      maxIlluminance: 'number',
      bitrate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHdrVideoResponseBody extends $tea.Model {
  requestId?: string;
  data?: ConvertHdrVideoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ConvertHdrVideoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHdrVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConvertHdrVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConvertHdrVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorRequest extends $tea.Model {
  videoUrl?: string;
  videoBitrate?: number;
  videoCodec?: string;
  videoFormat?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      videoFormat: 'VideoFormat',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      videoBitrate: 'number',
      videoCodec: 'string',
      videoFormat: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  videoBitrate?: number;
  videoCodec?: string;
  videoFormat?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      videoFormat: 'VideoFormat',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      videoBitrate: 'number',
      videoCodec: 'string',
      videoFormat: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorResponseBody extends $tea.Model {
  requestId?: string;
  data?: AdjustVideoColorResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AdjustVideoColorResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AdjustVideoColorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AdjustVideoColorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeRequest extends $tea.Model {
  videoUrl?: string;
  width?: number;
  height?: number;
  cropType?: string;
  fillType?: string;
  tightness?: number;
  r?: number;
  g?: number;
  b?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      width: 'Width',
      height: 'Height',
      cropType: 'CropType',
      fillType: 'FillType',
      tightness: 'Tightness',
      r: 'R',
      g: 'G',
      b: 'B',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      width: 'number',
      height: 'number',
      cropType: 'string',
      fillType: 'string',
      tightness: 'number',
      r: 'number',
      g: 'number',
      b: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  width?: number;
  height?: number;
  cropType?: string;
  fillType?: string;
  tightness?: number;
  r?: number;
  g?: number;
  b?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      width: 'Width',
      height: 'Height',
      cropType: 'CropType',
      fillType: 'FillType',
      tightness: 'Tightness',
      r: 'R',
      g: 'G',
      b: 'B',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      width: 'number',
      height: 'number',
      cropType: 'string',
      fillType: 'string',
      tightness: 'number',
      r: 'number',
      g: 'number',
      b: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeResponseBody extends $tea.Model {
  requestId?: string;
  data?: ChangeVideoSizeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ChangeVideoSizeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeVideoSizeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeVideoSizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoRequest extends $tea.Model {
  videoUrl?: string;
  bitRate?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      bitRate: 'BitRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      bitRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  bitRate?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      bitRate: 'BitRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      bitRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoResponseBody extends $tea.Model {
  requestId?: string;
  data?: SuperResolveVideoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SuperResolveVideoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuperResolveVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuperResolveVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultRequest extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetAsyncJobResultResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetAsyncJobResultResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAsyncJobResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAsyncJobResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceVideoTemplateRequest extends $tea.Model {
  userId?: string;
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceVideoTemplateAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceVideoTemplateResponseBody extends $tea.Model {
  requestId?: string;
  date?: AddFaceVideoTemplateResponseBodyDate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      date: AddFaceVideoTemplateResponseBodyDate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceVideoTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddFaceVideoTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddFaceVideoTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoRequest extends $tea.Model {
  scene?: string;
  width?: number;
  height?: number;
  style?: string;
  duration?: number;
  durationAdaption?: boolean;
  transitionStyle?: string;
  smartEffect?: boolean;
  puzzleEffect?: boolean;
  mute?: boolean;
  fileList?: GenerateVideoRequestFileList[];
  static names(): { [key: string]: string } {
    return {
      scene: 'Scene',
      width: 'Width',
      height: 'Height',
      style: 'Style',
      duration: 'Duration',
      durationAdaption: 'DurationAdaption',
      transitionStyle: 'TransitionStyle',
      smartEffect: 'SmartEffect',
      puzzleEffect: 'PuzzleEffect',
      mute: 'Mute',
      fileList: 'FileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      width: 'number',
      height: 'number',
      style: 'string',
      duration: 'number',
      durationAdaption: 'boolean',
      transitionStyle: 'string',
      smartEffect: 'boolean',
      puzzleEffect: 'boolean',
      mute: 'boolean',
      fileList: { 'type': 'array', 'itemType': GenerateVideoRequestFileList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoResponseBody extends $tea.Model {
  requestId?: string;
  data?: GenerateVideoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GenerateVideoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceVideoTemplateRequest extends $tea.Model {
  userId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceVideoTemplateResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFaceVideoTemplateResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: QueryFaceVideoTemplateResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceVideoTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFaceVideoTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFaceVideoTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceVideoTemplateRequest extends $tea.Model {
  userId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceVideoTemplateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceVideoTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFaceVideoTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFaceVideoTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoRequest extends $tea.Model {
  videoUrl?: string;
  duration?: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      duration: 'Duration',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      duration: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  duration?: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      duration: 'Duration',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      duration: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoResponseBody extends $tea.Model {
  requestId?: string;
  data?: AbstractEcommerceVideoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AbstractEcommerceVideoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbstractEcommerceVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbstractEcommerceVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoRequest extends $tea.Model {
  videoUrl?: string;
  length?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      length: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  length?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      length: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoResponseBody extends $tea.Model {
  requestId?: string;
  data?: AbstractFilmVideoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AbstractFilmVideoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbstractFilmVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbstractFilmVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesRequest extends $tea.Model {
  videoUrl?: string;
  BX?: number;
  BY?: number;
  BW?: number;
  BH?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      BX: 'BX',
      BY: 'BY',
      BW: 'BW',
      BH: 'BH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      BX: 'number',
      BY: 'number',
      BW: 'number',
      BH: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  BX?: number;
  BY?: number;
  BW?: number;
  BH?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      BX: 'BX',
      BY: 'BY',
      BW: 'BW',
      BH: 'BH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      BX: 'number',
      BY: 'number',
      BW: 'number',
      BH: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesResponseBody extends $tea.Model {
  requestId?: string;
  data?: EraseVideoSubtitlesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EraseVideoSubtitlesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EraseVideoSubtitlesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EraseVideoSubtitlesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoModelFaceRequest extends $tea.Model {
  userId?: string;
  templateId?: string;
  faceImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      templateId: 'TemplateId',
      faceImageURL: 'FaceImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      templateId: 'string',
      faceImageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoModelFaceAdvanceRequest extends $tea.Model {
  faceImageURLObject: Readable;
  userId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      faceImageURLObject: 'FaceImageURLObject',
      userId: 'UserId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceImageURLObject: 'Readable',
      userId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoModelFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: MergeVideoModelFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: MergeVideoModelFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoModelFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MergeVideoModelFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MergeVideoModelFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceRequest extends $tea.Model {
  videoURL?: string;
  postURL?: string;
  referenceURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
      postURL: 'PostURL',
      referenceURL: 'ReferenceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
      postURL: 'string',
      referenceURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  postURL?: string;
  referenceURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      postURL: 'PostURL',
      referenceURL: 'ReferenceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      postURL: 'string',
      referenceURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: MergeVideoFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: MergeVideoFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MergeVideoFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MergeVideoFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToneSdrVideoResponseBodyData extends $tea.Model {
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityResponseBodyData extends $tea.Model {
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterpolateVideoFrameResponseBodyData extends $tea.Model {
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoRequestBoxes extends $tea.Model {
  w?: number;
  h?: number;
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      w: 'W',
      h: 'H',
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      w: 'number',
      h: 'number',
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoAdvanceRequestBoxes extends $tea.Model {
  w?: number;
  h?: number;
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      w: 'W',
      h: 'H',
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      w: 'number',
      h: 'number',
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoResponseBodyData extends $tea.Model {
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHdrVideoResponseBodyData extends $tea.Model {
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorResponseBodyData extends $tea.Model {
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeResponseBodyData extends $tea.Model {
  videoCoverUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoCoverUrl: 'VideoCoverUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoCoverUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoResponseBodyData extends $tea.Model {
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseBodyData extends $tea.Model {
  status?: string;
  errorMessage?: string;
  result?: string;
  errorCode?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      errorMessage: 'ErrorMessage',
      result: 'Result',
      errorCode: 'ErrorCode',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      errorMessage: 'string',
      result: 'string',
      errorCode: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceVideoTemplateResponseBodyDate extends $tea.Model {
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoRequestFileList extends $tea.Model {
  type?: string;
  fileUrl?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      fileUrl: 'FileUrl',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      fileUrl: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoResponseBodyData extends $tea.Model {
  videoCoverUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoCoverUrl: 'VideoCoverUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoCoverUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceVideoTemplateResponseBodyDataElements extends $tea.Model {
  createTime?: string;
  updateTime?: string;
  userId?: string;
  templateId?: string;
  templateURL?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      updateTime: 'string',
      userId: 'string',
      templateId: 'string',
      templateURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceVideoTemplateResponseBodyData extends $tea.Model {
  elements?: QueryFaceVideoTemplateResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': QueryFaceVideoTemplateResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoResponseBodyData extends $tea.Model {
  videoCoverUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoCoverUrl: 'VideoCoverUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoCoverUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoResponseBodyData extends $tea.Model {
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesResponseBodyData extends $tea.Model {
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoModelFaceResponseBodyData extends $tea.Model {
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceResponseBodyData extends $tea.Model {
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("videoenhan", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async toneSdrVideoWithOptions(request: ToneSdrVideoRequest, runtime: $Util.RuntimeOptions): Promise<ToneSdrVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ToneSdrVideoResponse>(await this.doRPCRequest("ToneSdrVideo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ToneSdrVideoResponse({}));
  }

  async toneSdrVideo(request: ToneSdrVideoRequest): Promise<ToneSdrVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.toneSdrVideoWithOptions(request, runtime);
  }

  async toneSdrVideoAdvance(request: ToneSdrVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ToneSdrVideoResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let toneSdrVideoReq = new ToneSdrVideoRequest({ });
    OpenApiUtil.convert(request, toneSdrVideoReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    toneSdrVideoReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let toneSdrVideoResp = await this.toneSdrVideoWithOptions(toneSdrVideoReq, runtime);
    return toneSdrVideoResp;
  }

  async enhanceVideoQualityWithOptions(request: EnhanceVideoQualityRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceVideoQualityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnhanceVideoQualityResponse>(await this.doRPCRequest("EnhanceVideoQuality", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new EnhanceVideoQualityResponse({}));
  }

  async enhanceVideoQuality(request: EnhanceVideoQualityRequest): Promise<EnhanceVideoQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enhanceVideoQualityWithOptions(request, runtime);
  }

  async enhanceVideoQualityAdvance(request: EnhanceVideoQualityAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceVideoQualityResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let enhanceVideoQualityReq = new EnhanceVideoQualityRequest({ });
    OpenApiUtil.convert(request, enhanceVideoQualityReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    enhanceVideoQualityReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let enhanceVideoQualityResp = await this.enhanceVideoQualityWithOptions(enhanceVideoQualityReq, runtime);
    return enhanceVideoQualityResp;
  }

  async interpolateVideoFrameWithOptions(request: InterpolateVideoFrameRequest, runtime: $Util.RuntimeOptions): Promise<InterpolateVideoFrameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InterpolateVideoFrameResponse>(await this.doRPCRequest("InterpolateVideoFrame", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new InterpolateVideoFrameResponse({}));
  }

  async interpolateVideoFrame(request: InterpolateVideoFrameRequest): Promise<InterpolateVideoFrameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.interpolateVideoFrameWithOptions(request, runtime);
  }

  async interpolateVideoFrameAdvance(request: InterpolateVideoFrameAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<InterpolateVideoFrameResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let interpolateVideoFrameReq = new InterpolateVideoFrameRequest({ });
    OpenApiUtil.convert(request, interpolateVideoFrameReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    interpolateVideoFrameReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let interpolateVideoFrameResp = await this.interpolateVideoFrameWithOptions(interpolateVideoFrameReq, runtime);
    return interpolateVideoFrameResp;
  }

  async eraseVideoLogoWithOptions(request: EraseVideoLogoRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoLogoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EraseVideoLogoResponse>(await this.doRPCRequest("EraseVideoLogo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new EraseVideoLogoResponse({}));
  }

  async eraseVideoLogo(request: EraseVideoLogoRequest): Promise<EraseVideoLogoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eraseVideoLogoWithOptions(request, runtime);
  }

  async eraseVideoLogoAdvance(request: EraseVideoLogoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoLogoResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let eraseVideoLogoReq = new EraseVideoLogoRequest({ });
    OpenApiUtil.convert(request, eraseVideoLogoReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoUrlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    eraseVideoLogoReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let eraseVideoLogoResp = await this.eraseVideoLogoWithOptions(eraseVideoLogoReq, runtime);
    return eraseVideoLogoResp;
  }

  async convertHdrVideoWithOptions(request: ConvertHdrVideoRequest, runtime: $Util.RuntimeOptions): Promise<ConvertHdrVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConvertHdrVideoResponse>(await this.doRPCRequest("ConvertHdrVideo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ConvertHdrVideoResponse({}));
  }

  async convertHdrVideo(request: ConvertHdrVideoRequest): Promise<ConvertHdrVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertHdrVideoWithOptions(request, runtime);
  }

  async convertHdrVideoAdvance(request: ConvertHdrVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ConvertHdrVideoResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let convertHdrVideoReq = new ConvertHdrVideoRequest({ });
    OpenApiUtil.convert(request, convertHdrVideoReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    convertHdrVideoReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let convertHdrVideoResp = await this.convertHdrVideoWithOptions(convertHdrVideoReq, runtime);
    return convertHdrVideoResp;
  }

  async adjustVideoColorWithOptions(request: AdjustVideoColorRequest, runtime: $Util.RuntimeOptions): Promise<AdjustVideoColorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AdjustVideoColorResponse>(await this.doRPCRequest("AdjustVideoColor", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new AdjustVideoColorResponse({}));
  }

  async adjustVideoColor(request: AdjustVideoColorRequest): Promise<AdjustVideoColorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.adjustVideoColorWithOptions(request, runtime);
  }

  async adjustVideoColorAdvance(request: AdjustVideoColorAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AdjustVideoColorResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let adjustVideoColorReq = new AdjustVideoColorRequest({ });
    OpenApiUtil.convert(request, adjustVideoColorReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoUrlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    adjustVideoColorReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let adjustVideoColorResp = await this.adjustVideoColorWithOptions(adjustVideoColorReq, runtime);
    return adjustVideoColorResp;
  }

  async changeVideoSizeWithOptions(request: ChangeVideoSizeRequest, runtime: $Util.RuntimeOptions): Promise<ChangeVideoSizeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeVideoSizeResponse>(await this.doRPCRequest("ChangeVideoSize", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeVideoSizeResponse({}));
  }

  async changeVideoSize(request: ChangeVideoSizeRequest): Promise<ChangeVideoSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeVideoSizeWithOptions(request, runtime);
  }

  async changeVideoSizeAdvance(request: ChangeVideoSizeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ChangeVideoSizeResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let changeVideoSizeReq = new ChangeVideoSizeRequest({ });
    OpenApiUtil.convert(request, changeVideoSizeReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoUrlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    changeVideoSizeReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let changeVideoSizeResp = await this.changeVideoSizeWithOptions(changeVideoSizeReq, runtime);
    return changeVideoSizeResp;
  }

  async superResolveVideoWithOptions(request: SuperResolveVideoRequest, runtime: $Util.RuntimeOptions): Promise<SuperResolveVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuperResolveVideoResponse>(await this.doRPCRequest("SuperResolveVideo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new SuperResolveVideoResponse({}));
  }

  async superResolveVideo(request: SuperResolveVideoRequest): Promise<SuperResolveVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.superResolveVideoWithOptions(request, runtime);
  }

  async superResolveVideoAdvance(request: SuperResolveVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SuperResolveVideoResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let superResolveVideoReq = new SuperResolveVideoRequest({ });
    OpenApiUtil.convert(request, superResolveVideoReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoUrlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    superResolveVideoReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let superResolveVideoResp = await this.superResolveVideoWithOptions(superResolveVideoReq, runtime);
    return superResolveVideoResp;
  }

  async getAsyncJobResultWithOptions(request: GetAsyncJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAsyncJobResultResponse>(await this.doRPCRequest("GetAsyncJobResult", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAsyncJobResultResponse({}));
  }

  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  async addFaceVideoTemplateWithOptions(request: AddFaceVideoTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceVideoTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddFaceVideoTemplateResponse>(await this.doRPCRequest("AddFaceVideoTemplate", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddFaceVideoTemplateResponse({}));
  }

  async addFaceVideoTemplate(request: AddFaceVideoTemplateRequest): Promise<AddFaceVideoTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceVideoTemplateWithOptions(request, runtime);
  }

  async addFaceVideoTemplateAdvance(request: AddFaceVideoTemplateAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceVideoTemplateResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let addFaceVideoTemplateReq = new AddFaceVideoTemplateRequest({ });
    OpenApiUtil.convert(request, addFaceVideoTemplateReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    addFaceVideoTemplateReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let addFaceVideoTemplateResp = await this.addFaceVideoTemplateWithOptions(addFaceVideoTemplateReq, runtime);
    return addFaceVideoTemplateResp;
  }

  async generateVideoWithOptions(request: GenerateVideoRequest, runtime: $Util.RuntimeOptions): Promise<GenerateVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateVideoResponse>(await this.doRPCRequest("GenerateVideo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateVideoResponse({}));
  }

  async generateVideo(request: GenerateVideoRequest): Promise<GenerateVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateVideoWithOptions(request, runtime);
  }

  async queryFaceVideoTemplateWithOptions(request: QueryFaceVideoTemplateRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceVideoTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFaceVideoTemplateResponse>(await this.doRPCRequest("QueryFaceVideoTemplate", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFaceVideoTemplateResponse({}));
  }

  async queryFaceVideoTemplate(request: QueryFaceVideoTemplateRequest): Promise<QueryFaceVideoTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceVideoTemplateWithOptions(request, runtime);
  }

  async deleteFaceVideoTemplateWithOptions(request: DeleteFaceVideoTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceVideoTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFaceVideoTemplateResponse>(await this.doRPCRequest("DeleteFaceVideoTemplate", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFaceVideoTemplateResponse({}));
  }

  async deleteFaceVideoTemplate(request: DeleteFaceVideoTemplateRequest): Promise<DeleteFaceVideoTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceVideoTemplateWithOptions(request, runtime);
  }

  async abstractEcommerceVideoWithOptions(request: AbstractEcommerceVideoRequest, runtime: $Util.RuntimeOptions): Promise<AbstractEcommerceVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AbstractEcommerceVideoResponse>(await this.doRPCRequest("AbstractEcommerceVideo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new AbstractEcommerceVideoResponse({}));
  }

  async abstractEcommerceVideo(request: AbstractEcommerceVideoRequest): Promise<AbstractEcommerceVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abstractEcommerceVideoWithOptions(request, runtime);
  }

  async abstractEcommerceVideoAdvance(request: AbstractEcommerceVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AbstractEcommerceVideoResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let abstractEcommerceVideoReq = new AbstractEcommerceVideoRequest({ });
    OpenApiUtil.convert(request, abstractEcommerceVideoReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoUrlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    abstractEcommerceVideoReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let abstractEcommerceVideoResp = await this.abstractEcommerceVideoWithOptions(abstractEcommerceVideoReq, runtime);
    return abstractEcommerceVideoResp;
  }

  async abstractFilmVideoWithOptions(request: AbstractFilmVideoRequest, runtime: $Util.RuntimeOptions): Promise<AbstractFilmVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AbstractFilmVideoResponse>(await this.doRPCRequest("AbstractFilmVideo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new AbstractFilmVideoResponse({}));
  }

  async abstractFilmVideo(request: AbstractFilmVideoRequest): Promise<AbstractFilmVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abstractFilmVideoWithOptions(request, runtime);
  }

  async abstractFilmVideoAdvance(request: AbstractFilmVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AbstractFilmVideoResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let abstractFilmVideoReq = new AbstractFilmVideoRequest({ });
    OpenApiUtil.convert(request, abstractFilmVideoReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoUrlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    abstractFilmVideoReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let abstractFilmVideoResp = await this.abstractFilmVideoWithOptions(abstractFilmVideoReq, runtime);
    return abstractFilmVideoResp;
  }

  async eraseVideoSubtitlesWithOptions(request: EraseVideoSubtitlesRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoSubtitlesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EraseVideoSubtitlesResponse>(await this.doRPCRequest("EraseVideoSubtitles", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new EraseVideoSubtitlesResponse({}));
  }

  async eraseVideoSubtitles(request: EraseVideoSubtitlesRequest): Promise<EraseVideoSubtitlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eraseVideoSubtitlesWithOptions(request, runtime);
  }

  async eraseVideoSubtitlesAdvance(request: EraseVideoSubtitlesAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoSubtitlesResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let eraseVideoSubtitlesReq = new EraseVideoSubtitlesRequest({ });
    OpenApiUtil.convert(request, eraseVideoSubtitlesReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoUrlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    eraseVideoSubtitlesReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let eraseVideoSubtitlesResp = await this.eraseVideoSubtitlesWithOptions(eraseVideoSubtitlesReq, runtime);
    return eraseVideoSubtitlesResp;
  }

  async mergeVideoModelFaceWithOptions(request: MergeVideoModelFaceRequest, runtime: $Util.RuntimeOptions): Promise<MergeVideoModelFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MergeVideoModelFaceResponse>(await this.doRPCRequest("MergeVideoModelFace", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new MergeVideoModelFaceResponse({}));
  }

  async mergeVideoModelFace(request: MergeVideoModelFaceRequest): Promise<MergeVideoModelFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mergeVideoModelFaceWithOptions(request, runtime);
  }

  async mergeVideoModelFaceAdvance(request: MergeVideoModelFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<MergeVideoModelFaceResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let mergeVideoModelFaceReq = new MergeVideoModelFaceRequest({ });
    OpenApiUtil.convert(request, mergeVideoModelFaceReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.faceImageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    mergeVideoModelFaceReq.faceImageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let mergeVideoModelFaceResp = await this.mergeVideoModelFaceWithOptions(mergeVideoModelFaceReq, runtime);
    return mergeVideoModelFaceResp;
  }

  async mergeVideoFaceWithOptions(request: MergeVideoFaceRequest, runtime: $Util.RuntimeOptions): Promise<MergeVideoFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MergeVideoFaceResponse>(await this.doRPCRequest("MergeVideoFace", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new MergeVideoFaceResponse({}));
  }

  async mergeVideoFace(request: MergeVideoFaceRequest): Promise<MergeVideoFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mergeVideoFaceWithOptions(request, runtime);
  }

  async mergeVideoFaceAdvance(request: MergeVideoFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<MergeVideoFaceResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videoenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let mergeVideoFaceReq = new MergeVideoFaceRequest({ });
    OpenApiUtil.convert(request, mergeVideoFaceReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    mergeVideoFaceReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let mergeVideoFaceResp = await this.mergeVideoFaceWithOptions(mergeVideoFaceReq, runtime);
    return mergeVideoFaceResp;
  }

}
