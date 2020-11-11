<template>
  <section>
    <b-container>
      <b-row :class="{ 'd-none': accessTokenError }">
        <b-col>
          <weavr-corporate-verification-flow-kyc
            :access-token="accessToken"
            :verification-flow="verificationFlow"
            :email="email"
            :mobile="mobile"
            :options="options"
            @message="handleSumSubMessage"
          />
        </b-col>
      </b-row>
    </b-container>
    <b-container v-if="accessTokenError">
      <b-row align-h="center">
        <b-col md="6">
          <b-alert variant="danger" show>
            <p class="text-center m-0">
              The link that you are trying to use may have expired. Please contact your main account holder to obtain a
              new link.
            </p>
          </b-alert>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import { BIcon, BIconBoxArrowUpRight } from 'bootstrap-vue'
import BaseMixin from '~/minixs/BaseMixin'
import { CorporateVerificationFlowOptions } from '~/plugins/weavr/components/api'

@Component({
  components: {
    BIcon,
    BIconBoxArrowUpRight
  }
})
export default class KybPage extends mixins(BaseMixin) {
  accessToken!: string
  verificationFlow!: string
  email!: string
  mobile!: string

  accessTokenError: boolean = false

  get options(): Partial<CorporateVerificationFlowOptions> {
    return {
      customCss: ''
    }
  }

  asyncData({ route }) {
    return {
      accessToken: route.query.token,
      verificationFlow: route.query.verification_flow,
      email: route.query.email,
      mobile: route.query.phone
    }
  }

  handleSumSubMessage(message) {
    if (message.messageType === 'idCheck.onError') {
      if (message.payload.error === 'Access token required') {
        this.accessTokenError = true
      } else {
        console.log(message)
      }
    } else {
      console.log(message)
    }
  }
}
</script>
