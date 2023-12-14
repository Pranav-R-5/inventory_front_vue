 <template>
  <div id="blibliApp">
    <headercomponet :title="'Pranav'" @alertmessage="search"></headercomponet>
    <div class="bodypage">
      <filtercomponent></filtercomponent>
        <router-view/>
  </div>
  </div>
</template>

<script src="./js/app"></script>

<style lang="scss" scoped>
@import '@blibli/blue-design-tokens/dist/tokens-default.scss';
.bodypage{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    // background-color: #dcdcd9;
}

</style>
