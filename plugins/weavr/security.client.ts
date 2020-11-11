import Vue from 'vue'
import config from '~/config'
import WeavrForm from '~/plugins/weavr/components/WeavrForm.vue'
import WeavrInput from '~/plugins/weavr/components/WeavrInput.vue'
import WeavrSpan from '~/plugins/weavr/components/WeavrSpan.vue'
import { SecureClient } from '~/plugins/weavr/components/api'
import WeavrConsumerVerificationFlowKyc from '~/plugins/weavr/components/WeavrConsumerVerificationFlowKyc.vue'
import WeavrCorporateVerificationFlowKyb from '~/plugins/weavr/components/WeavrCorporateVerificationFlowKyb.vue'
import WeavrCorporateVerificationFlowKyc from '~/plugins/weavr/components/WeavrCorporateVerificationFlowKyc.vue'

// @ts-ignore
window.OpcUxSecureClient.init(config.api.uiKey, {
  fonts: [
    {
      cssSrc:
        'https://fonts.googleapis.com/css?family=Be+Vietnam:100,100i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i'
    }
  ]
})

// @ts-ignore
Vue.prototype.$OpcUxSecureClient = window.OpcUxSecureClient

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({ app }, inject) => {
  inject('weavrSecurityAssociate', (token) => {
    // @ts-ignore
    return asyncAssociate(token)
  })
}

function asyncAssociate(token) {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    window.OpcUxSecureClient.associate(
      token,
      (res) => {
        resolve(res)
      },
      (e) => {
        reject(e)
      }
    )
  })
}

Vue.component('weavr-form', WeavrForm)
Vue.component('weavr-input', WeavrInput)
Vue.component('weavr-span', WeavrSpan)
Vue.component('weavr-consumer-verification-flow-kyc', WeavrConsumerVerificationFlowKyc)
Vue.component('weavr-corporate-verification-flow-kyb', WeavrCorporateVerificationFlowKyb)
Vue.component('weavr-corporate-verification-flow-kyc', WeavrCorporateVerificationFlowKyc)

declare module 'vue/types/vue' {
  interface Vue {
    $OpcUxSecureClient: SecureClient
    $weavrSecurityAssociate: (token) => {}
  }
}
