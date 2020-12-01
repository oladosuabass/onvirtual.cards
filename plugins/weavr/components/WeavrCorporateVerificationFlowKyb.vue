<template>
  <div id="weavr-corporate-verification-flow-kyb" />
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { CorporateVerificationFlowOptions } from '~/plugins/weavr/components/api'

@Component
export default class WeavrCorporateVerificationFlowKyb extends Vue {
  @Prop({}) corporateId!: bigint
  @Prop({}) reference!: bigint
  @Prop({}) options!: Partial<CorporateVerificationFlowOptions>

  mounted() {
    this.$OpcUxSecureClient
      .kyb({ selector: '#weavr-corporate-verification-flow-kyb', ...this.options, onMessage: this.sumsubMessage })
      .launch({
        corporateId: this.corporateId,
        reference: this.reference
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
