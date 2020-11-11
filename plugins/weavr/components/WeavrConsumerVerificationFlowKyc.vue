<template>
  <div id="weavr-consumer-verification-flow-kyc" />
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { ConsumerVerificationFlowOptions } from './api'

@Component
export default class WeavrConsumerVerificationFlowKyc extends Vue {
  @Prop({}) consumerId!: bigint
  @Prop({}) reference!: bigint
  @Prop({}) options!: Partial<ConsumerVerificationFlowOptions>

  mounted() {
    this.$OpcUxSecureClient
      .consumerVerificationFlow({ selector: '#weavr-consumer-verification-flow-kyc', ...this.options, onMessage: this.message })
      .kyc({
        token: 'Bearer ' + this.$store.getters['auth/token'],
        consumerId: this.consumerId,
        referenceId: this.reference
      })
  }

  @Emit('message')
  message(event: any) {
    return event
  }
}
</script>

<style lang="scss" scoped></style>
