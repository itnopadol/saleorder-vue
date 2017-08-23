import $ from 'jquery'
export default {
	name: 'saleorder',
	data () {
		return {
			msg: 'WelCome SO Nopadol from file so.js'
		}
	},
	methods: {
		SearchItem () {
			$('#searchItem').addClass('is-active')
		},
		closeSearchItem () {
			$('#searchItem').removeClass('is-active')
		}
	}
}