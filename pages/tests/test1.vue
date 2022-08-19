<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="11" md="10" lg="9">
          <v-card>
            <v-card-text>
              <v-row>
                <v-col>
                  <h1 class="text-h1">
                    Test 1
                  </h1>
                  <p class="text-xl-left">
                    For this code example, you write code so that test1.spec.js passes.
                  </p>
                  <p class="text-lg-left">
                    On this page, a user will enter a score and you need to display the number of strokes over par their score was. Assume par is 72.
                  </p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="11" md="10" lg="9">
          <v-card>
            <v-card-text>
              <v-text-field
                label="Golfer Score"
                v-model="score"
                placeholder="Enter score"
              ></v-text-field>
              <div class="mt-10">
                <v-btn depressed color="primary" v-on:click="calculateScore( score )">Calculate Difference to Par</v-btn>
              </div>
              <div id="net-diff" class="mt-10 pt-5 text-lg-center" v-if="netDifference != null">
                {{ netDifference}}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'test-1',
  head () {
    return {
      title: 'Test 1'
    }
  },

  data () {
    return {
      score: null,
      netDifference: null
    }
  },
  methods: {
  // This is the method you should update to make tests pass
    calculateScore (score) {
      this.netDifference = 14
    }
  },
  components: {
  }
}
</script>
<style lang="scss">
#net-diff{
font-size: 3em
}
</style>
