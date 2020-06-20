<script type="text/babel">
var Checkbox = React.createClass({
  getInitialState: function() {
	return {checked: true}
  },
  handleCheck: function() {
	this.setState({checked: !this.state.checked});
  },
  render: function() {
	var msg; var sc;
	if (this.state.checked) {
	  msg = "Checked";
		sc="#react-container{border:1px solid red;}"
	} else {
	  msg = "Un-checked";
	}
	return (
	  <div class="container">
		<input type="checkbox" class="toggle" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
		<p>Checkbox: {msg}</p>
		<style>{sc}</style>
	  </div>
	);
  }
});

React.render(<Checkbox />,
  document.getElementById('react-container')
);
</script>