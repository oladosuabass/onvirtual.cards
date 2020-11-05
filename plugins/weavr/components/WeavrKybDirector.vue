<template>
  <div id="weavr-kyb-director" />
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { KYBOptions } from '~/plugins/weavr/components/api'

@Component
export default class WeavrKybDirector extends Vue {
  @Prop({}) accessToken!: string
  @Prop({}) verificationFlow!: string
  @Prop({}) email!: string
  @Prop({}) mobile!: string

  @Prop({}) options!: Partial<KYBOptions>

  mounted() {
    this.$OpcUxSecureClient
      .kyb({ selector: '#weavr-kyb-director', ...this.options, onMessage: this.sumsubMessage })
      .launch({
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
