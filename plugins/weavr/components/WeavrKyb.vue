<template>
  <div id="weavr-kyb" />
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { KYBOptions } from '~/plugins/weavr/components/api'

@Component
export default class WeavrKyb extends Vue {
  @Prop({}) corporateId!: bigint
  @Prop({}) reference!: bigint
  @Prop({}) options!: Partial<KYBOptions>

  mounted() {
    this.$OpcUxSecureClient
      .kyb({ selector: '#weavr-kyb', ...this.options, onMessage: this.sumsubMessage })
      .getParamsAndLaunch('Bearer ' + this.$store.getters['auth/token'], this.corporateId, this.reference)
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
