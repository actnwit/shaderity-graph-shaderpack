import {GUIModeEnum, AvailableShaderStageEnum} from './Enum';
import {SocketData as _SocketData} from 'shaderity-graph';

export type SocketData = _SocketData;

export interface ShaderNodeData {
  shaderFunctionName: string;
  shaderFunctionCode: string;
  extensions: Array<string>;
  socketDataArray: Array<SocketData>;

  // defined by comments in a shader function code file
  nodeName: string;
  availableShaderStage: AvailableShaderStageEnum;
  guiMode: GUIModeEnum;
  guiOptions?: {
    pullDown?: {
      shaderFunctionNames: Array<string>;
    };
  };
}