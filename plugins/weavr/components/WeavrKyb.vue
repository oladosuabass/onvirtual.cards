<template>
  <div id="sumsub-websdk-container" />
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { KYBOptions } from '~/plugins/weavr/components/api'

@Component
export default class WeavrKyb extends Vue {
  @Prop({}) corporateId!: string
  @Prop({}) referenceId!: string
  @Prop({}) options!: KYBOptions

  mounted() {
    const token = 'Bearer ' + this.$store.getters['auth/auth'].token

    this.$OpcUxSecureClient
      .kyb()
      .init(token, this.corporateId, this.referenceId, '#sumsub-websdk-container', this.options)
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
