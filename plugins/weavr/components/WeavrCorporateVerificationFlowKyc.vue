<template>
  <div id="weavr-corporate-verification-flow-kyc" />
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { CorporateVerificationFlowOptions } from '~/plugins/weavr/components/api'

@Component
export default class WeavrCorporateVerificationFlowKyc extends Vue {
  @Prop({}) accessToken!: string
  @Prop({}) verificationFlow!: string
  @Prop({}) email!: string
  @Prop({}) mobile!: string

  @Prop({}) options!: Partial<CorporateVerificationFlowOptions>

  mounted() {
    this.$OpcUxSecureClient
      .corporateVerificationFlow({ selector: '#weavr-corporate-verification-flow-kyc', ...this.options, onMessage: this.sumsubMessage })
      .kyc({
        accessToken: this.accessToken,
        verificationFlow: this.verificationFlow,
        email: this.email,
        mobile: this.mobile
      })
  }

  @Emit('message')
  sumsubMessage(messageType, payload) {
    return {
      messageType: messageType,
      payload: payload
    }
  }
}
</script>

<style lang="scss" scoped></style>
