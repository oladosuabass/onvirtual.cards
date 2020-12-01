'use strict'

export interface SecureClient {
  init(publicApiKey: string, options: SecureClientOptions): void

  associate(authToken: string, resolve?: () => void, reject?: (e?: any) => void): void

  kyb(options: CorporateVerificationFlowOptions): CorporateVerificationFlowContract

  kyc(options: ConsumerVerificationFlowOptions): ConsumerVerificationFlowContract

  form(): SecureForm

  span(field: string, token: string, options?: SecureSpanOptions): SecureSpan
}

export interface SecureForm {
  input(name: string, field: string, options?: SecureInputOptions): SecureInput

  tokenize(resolve?: (tokens: { [key: string]: string }) => void, reject?: (e?: any) => void): void

  destroy(): this
}

export interface SecureInput {
  update(options?: SecureInputOptions): void

  focus(): this

  blur(): this

  mount(el: HTMLElement | string): this

  clear(): this

  unmount(): this

  destroy(): this

  addListener(event: string, listener: (...args: any[]) => void): this

  on(event: string, listener: (...args: any[]) => void): this

  removeListener(event: string, listener: (...args: any[]) => void): this

  off(event: string, listener: (...args: any[]) => void): this

  removeAllListeners(event?: string): this
}

export interface SecureSpan {
  update(options?: SecureInputOptions): this

  mount(el: HTMLElement | string): this

  unmount(): this

  destroy(): this

  addListener(event: string, listener: (...args: any[]) => void): this

  on(event: string, listener: (...args: any[]) => void): this

  removeListener(event: string, listener: (...args: any[]) => void): this

  off(event: string, listener: (...args: any[]) => void): this

  removeAllListeners(event?: string): this
}

export interface SecureClientOptions {
  fonts: (SecureElementStyleFontSrc | SecureElementStyleFont)[]
}

export interface SecureElementStyleFontSrc {
  cssSrc: string
}

export interface SecureElementStyleFont {
  family: string
  src: string
  style?: string
  unicodeRange?: string
  weight?: string
  variant?: string
  stretch?: string
}

export interface SecureInputOptions {
  classNames?: SecureInputOptionsClasses
  placeholder?: string
  maxlength?: number
  autocorrect?: string
  style?: SecureElementStyles
}

export interface SecureInputOptionsClasses {
  base?: string
  empty?: string
  focus?: string
  valid?: string
  invalid?: string
  autofill?: string
}

export interface SecureSpanOptions {
  className?: string
  autocorrect?: string
  style?: SecureElementStyleWithPseudoClasses
}

export interface SecureElementStyles {
  base?: SecureElementStyleWithPseudoClasses
  empty?: SecureElementStyleWithPseudoClasses
  valid?: SecureElementStyleWithPseudoClasses
  invalid?: SecureElementStyleWithPseudoClasses
}

export interface SecureElementStyle {
  color?: string
  fontFamily?: string
  fontSize?: string
  fontSmoothing?: string
  fontStyle?: string
  fontVariant?: string
  fontWeight?: string
  height?: string
  letterSpacing?: string
  lineHeight?: string
  margin?: string
  padding?: string
  textAlign?: string
  textDecoration?: string
  textIndent?: string
  textShadow?: string
  textTransform?: string
}

export interface SecureElementStyleWithPseudoClasses extends SecureElementStyle {
  ':hover'?: SecureElementStyle
  ':focus'?: SecureElementStyle
  '::placeholder'?: SecureElementStyle
  '::selection'?: SecureElementStyle
  ':-webkit-autofill'?: SecureElementStyle
}

export declare type VerificationFlowLoadHandler = () => void
export declare type VerificationFlowLaunchHandler = (response: CorporateVerificationFlowLoadAndLaunchParams) => void

export interface VerificationFlow {
  getPath(identityId: bigint, reference: bigint): string

  getParams(identityId: bigint, reference: bigint, callback: VerificationFlowLaunchHandler): void

  getParamsLoadAndLaunch(identityId: bigint, reference: bigint): void

  loadAndLaunch(
    params: CorporateVerificationFlowLoadAndLaunchParams | ConsumerVerificationFlowLoadAndLaunchParams
  ): SumSub | Idenfy
}

export interface CorporateVerificationFlowLaunchParams {
  corporateId: bigint
  reference: bigint
}

export interface CorporateVerificationFlowContract extends VerificationFlow {
  options: CorporateVerificationFlowOptions

  loadAndLaunch(params: CorporateVerificationFlowLoadAndLaunchParams): SumSub

  launch(params: CorporateVerificationFlowLaunchParams): void
}

export interface ConsumerVerificationFlowLaunchParams {
  consumerId: bigint
  reference: bigint
}

export interface ConsumerVerificationFlowContract extends VerificationFlow {
  options: ConsumerVerificationFlowOptions

  loadAndLaunch(params: ConsumerVerificationFlowLoadAndLaunchParams): Idenfy | SumSub

  launch(params: ConsumerVerificationFlowLaunchParams): void
}

export interface VerificationFlowProvider {
  type: VerificationFlowProviders.SUMSUB | VerificationFlowProviders.IDENFY

  load(callback: VerificationFlowLoadHandler): void
}

export interface VerificationFlowOptions {
  selector: string
}

export interface CorporateVerificationFlowOptions extends VerificationFlowOptions {
  onMessage?: (messageType: any, payload: any) => void
  onError?: (error: any) => void
  customCss?: string
  customCssStr?: string
}

export interface ConsumerVerificationFlowOptions extends VerificationFlowOptions {
  onMessage?: (event: any) => void
  onError?: (error: any) => void
  customCss?: string
  customCssStr?: string
}

export interface LaunchParams {
  email?: string
  mobile?: string
}

export interface CorporateVerificationFlowLoadAndLaunchParams extends LaunchParams {
  accessToken: string
  verificationFlow: string
  externalUserId?: bigint
  kybProviderKey?: VerificationFlowProviders.SUMSUB
}

export interface SumSubConsumerVerificationFlowLoadAndLaunchParams extends LaunchParams {
  accessToken: string
  verificationFlow: string
  externalUserId?: bigint
  kycProviderKey?: VerificationFlowProviders.IDENFY | VerificationFlowProviders.SUMSUB
}

export interface IdenfyConsumerVerificationFlowLoadAndLaunchParams extends LaunchParams {
  redirectUrl: string
  kycProviderKey?: VerificationFlowProviders.IDENFY
}

export type ConsumerVerificationFlowLoadAndLaunchParams =
  | SumSubConsumerVerificationFlowLoadAndLaunchParams
  | IdenfyConsumerVerificationFlowLoadAndLaunchParams

export interface SumSub extends VerificationFlowProvider {
  type: VerificationFlowProviders.SUMSUB

  launch(params: CorporateVerificationFlowLoadAndLaunchParams): void
}

export interface Idenfy extends VerificationFlowProvider {
  type: VerificationFlowProviders.IDENFY

  launch(params: ConsumerVerificationFlowLoadAndLaunchParams): void
}

export enum VerificationFlowProviders {
  IDENFY = 'idenfy',
  SUMSUB = 'sumsub'
}
