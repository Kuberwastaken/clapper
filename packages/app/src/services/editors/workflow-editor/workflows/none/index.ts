import {
  ClapWorkflow,
  ClapWorkflowEngine,
  ClapWorkflowCategory,
  ClapWorkflowProvider,
} from '@aitube/clap'

// ------------------------------------------------------------------------------
// if a user is already using one of those workflows and you change its settings,
// they will have to reselect it in the UI for changes to be taken into account.
//
// -> we can create a ticket to fix this
// ------------------------------------------------------------------------------

// those placeholder workflows allow the user to de-select a step
// eg. disable face swapping
export const noneWorkflows: ClapWorkflow[] = [
  {
    id: 'none://image/face-swap',
    label: 'No image face-swap',
    description: '',
    tags: [],
    author: '',
    thumbnailUrl: '',
    nonCommercial: false,
    engine: ClapWorkflowEngine.DEFAULT,
    category: ClapWorkflowCategory.IMAGE_FACESWAP,
    provider: ClapWorkflowProvider.NONE,
    data: '',
    schema: '',
    inputFields: [],
    inputValues: {},
  },
  {
    id: 'none://video/face-swap',
    label: 'No video face-swap',
    description: '',
    tags: [],
    author: '',
    thumbnailUrl: '',
    nonCommercial: false,
    engine: ClapWorkflowEngine.DEFAULT,
    category: ClapWorkflowCategory.VIDEO_FACESWAP,
    provider: ClapWorkflowProvider.NONE,
    data: '',
    schema: '',
    inputFields: [],
    inputValues: {},
  },
  {
    id: 'none://image/upscaling',
    label: 'No image upscaling',
    description: '',
    tags: [],
    author: '',
    thumbnailUrl: '',
    nonCommercial: false,
    engine: ClapWorkflowEngine.DEFAULT,
    category: ClapWorkflowCategory.IMAGE_UPSCALING,
    provider: ClapWorkflowProvider.NONE,
    data: '',
    schema: '',
    inputFields: [],
    inputValues: {},
  },
  {
    id: 'none://video/upscaling',
    label: 'No video upscaling',
    description: '',
    tags: [],
    author: '',
    thumbnailUrl: '',
    nonCommercial: false,
    engine: ClapWorkflowEngine.DEFAULT,
    category: ClapWorkflowCategory.VIDEO_UPSCALING,
    provider: ClapWorkflowProvider.NONE,
    data: '',
    schema: '',
    inputFields: [],
    inputValues: {},
  },
]
