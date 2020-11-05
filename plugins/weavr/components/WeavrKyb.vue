<template>
  <div id="idensic" />
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { KYBOptions } from '~/plugins/weavr/components/api'

@Component
export default class WeavrKyb extends Vue {
  @Prop({}) corporateId!: string
  @Prop({}) reference!: string
  @Prop({}) options!: KYBOptions

  mounted() {
    this.$OpcUxSecureClient
      .kyb()
      .init('Bearer ' + this.$store.getters['auth/token'], this.corporateId, this.reference, '#idensic', this.options)
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
