function buildControls(typearray){
	var optionDivHTML = "<div class='options'>";
	optionDivHTML += "<div class='btn-group closed'>";
	optionDivHTML += "<button class='btn dropdown-toggle' data-toggle='dropdown'>Category<span class='caret'></span></button>";
	optionDivHTML += "<ul class='dropdown-menu'>";
	for(var i = 0; i<typearray.length; i++){
		optionDivHTML += "<li><a class=''>"+typearray[i]+"</a></li>";
	}
	optionDivHTML +="</ul></div>";
	
	optionDivHTML +="</div>"
	return optionDivHTML;
}

function applyHover(){
	/*var sections = document.getElementsByTagName('section');*/
	var sections = document.getElementsByClassName('hoverable');
	for(var i=0; i<sections.length; i++){
		sections[i].setAttribute("onmouseover","showOptions(this);");
		sections[i].setAttribute("onmouseout","hideOptions(this);");

		//var types = ["Client", "Business","I like fishsticks"];
		//sections[i].innerHTML+= buildControls(types);
	}
	
}

function showOptions(e){
	e.setAttribute('class',"hoverable expand-options")
}
function hideOptions(e){
	e.setAttribute('class',"hoverable collapse-options")
}

function load(){
	applyHover();
}

/*
<div class="btn-group open">
          <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Action <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

<div class='btn-toolbar'>
<div class='btn-group'><button class='btn'>1</button><button class='btn'>2</button><button class='btn'>3</button><button class='btn'>4</button></div>
        <div class="btn-group">
          <button class="btn">5</button>
          <button class="btn">6</button>
          <button class="btn">7</button>
        </div>
        <div class="btn-group">
          <button class="btn">8</button>
        </div>
      </div>n pagination-centered'><ul><li class='active'><a>1</a></li><li><a>2</a></li><li><a>3</a></li><li><a>4</a></li></ul></div>

<div class="tabbable tabs-below">
        <div class="tab-content">
          <div class="tab-pane active" id="A">
            <p>I'm in Section A.</p>
          </div>
          <div class="tab-pane" id="B">
            <p>Howdy, I'm in Section B.</p>
          </div>
          <div class="tab-pane" id="C">
            <p>What up girl, this is Section C.</p>
          </div>
        </div>
        <ul class="nav nav-tabs">
          <li class="active"><a href="#A" data-toggle="tab">Section 1</a></li>
          <li class=""><a href="#B" data-toggle="tab">Section 2</a></li>
          <li class=""><a href="#C" data-toggle="tab">Section 3</a></li>
        </ul>
      </div>
       */