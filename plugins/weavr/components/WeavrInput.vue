<template>
  <div :class="className" class="weavr-input" />
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { SecureElementStyleWithPseudoClasses, SecureForm, SecureInputOptions } from '~/plugins/weavr/components/api'
import * as SecureClientStore from '~/store/modules/SecureClient'

@Component
class WeavrInput extends Vue {
  @Prop() readonly form!: SecureForm

  @Prop() readonly name!: string

  @Prop() readonly placeholder!: string

  @Prop() readonly value!: string

  @Prop() readonly field!: 'password' | 'cardNumber' | 'cvv'

  @Prop() readonly options!: SecureInputOptions

  @Prop() readonly className!: string

  @Prop() readonly customStyle!: object

  @Prop() readonly baseStyle!: SecureElementStyleWithPseudoClasses

  @Prop() readonly emptyStyle!: SecureElementStyleWithPseudoClasses

  @Prop() readonly validStyle!: SecureElementStyleWithPseudoClasses

  @Prop() readonly invalidStyle!: SecureElementStyleWithPseudoClasses

  @Emit('onReady') onReady() {}

  @Emit('onChange') onChange() {}

  @Emit('onKeyUp') onKeyUp() {}

  @Emit('onBlur') onBlur() {}

  @Emit('onFocus') onFocus() {}

  protected _input

  mounted() {
    this._input = SecureClientStore.Helpers.getForm(this.$store)?.input(this.name, this.field, this.inputOptions)
    this._input.mount(this.$el)
    this._addListeners(this._input)
  }

  beforeDestroy() {
    this._removeListeners(this._input)
    this._input.destroy()
  }

  _addListeners(input) {
    this.onReady && input.on('ready', this.onReady)
    this.onChange && input.on('change', this.onChange)
    this.onKeyUp && input.on('keyup', this.onKeyUp)
    this.onBlur && input.on('blur', this.onBlur)
    this.onFocus && input.on('focus', this.onFocus)
  }

  _removeListeners(input) {
    this.onReady && input.off('ready', this.onReady)
    this.onChange && input.off('change', this.onChange)
    this.onKeyUp && input.off('keyup', this.onKeyUp)
    this.onBlur && input.off('blur', this.onBlur)
    this.onFocus && input.off('focus', this.onFocus)
  }

  get inputOptions() {
    return {
      ...this.options,
      style: {
        base: this.baseStyle,
        empty: this.emptyStyle,
        valid: this.validStyle,
        invalid: this.invalidStyle
      }
    }
  }
}

export default WeavrInput
</script>

<style lang="scss" scoped></style>
