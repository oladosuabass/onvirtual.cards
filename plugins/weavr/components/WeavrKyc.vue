<template>
  <div id="weavr-kyc" />
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { KYCOptions } from './api'

@Component
export default class WeavrKyc extends Vue {
  @Prop({}) consumerId!: bigint
  @Prop({}) reference!: bigint
  @Prop({}) options!: Partial<KYCOptions>

  mounted() {
    this.$OpcUxSecureClient
      .kyc({ selector: '#weavr-kyc', ...this.options, onMessage: this.message })
      .getParamsAndLaunch('Bearer ' + this.$store.getters['auth/token'], this.consumerId, this.reference)
  }

  @Emit('message')
  message(event: any) {
    return event
  }
}
</script>

<style lang="scss" scoped></style>
