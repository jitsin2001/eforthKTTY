/** @jsx React.DOM */
//var othercomponent=Require("other"); 
var connection = React.createClass({
  render: function() { var connecting, className, flg, txt, act, sta;
    connecting=this.props.connecting;
    className=connecting?'ready':'notReady';
    flg=connecting?'warning':'normal';
    txt=connecting?'close':'connect';
    act=connecting?this.doclose:this.doconnect;
    sta=connecting?'true':'False (please click "connect")';
    return (
      <div>
        <button className={flg} onClick={act}>{txt}</button>
        connecting: <span className={className}>{sta}</span>
      </div>
    );
  },
  doconnect:function() {
    this.props.onConnect(this.props.port,this.props.baud);
  },
  doclose:function() {
    this.props.onClose();
  }
});
module.exports=connection;