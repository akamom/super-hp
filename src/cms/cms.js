import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
