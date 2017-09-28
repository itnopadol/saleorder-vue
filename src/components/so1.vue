<template>
  <div class="saleorder">
      {{ msg }}
      <div class="Fcontainer">
	    	<div class="T-r">
		      	<div class="title-l">
		      		มูลค่ารวมทั้งหมด
		      		<br>
		      		<i class="material-icons" width>monetization_on</i>
		      	</div>
		      	<div class="detail-r">
		      		30,000.00 ฿
		      	</div>
				<div class="T-status">
			     	<b>Status : </b>
			    </div>
			</div>

		   <div class="T-l">
			  <div class="TA-l">
			   เลขที่เอกสาร
			  </div>
			  <div class="DA-r">
			   	<input type="text" placeholder="เลขที่เอกสาร....">
			  </div> 
			  <div class="TA-l">
			   ประเภทภาษี
			  </div>
			  <div class="DA-r">
			   <select>
			    <option> แยกนอก </option>
			    <option> รวมใน </option>
			    <option> อัตราศูนย์ </option>
			   </select>
			  </div>  
			  <div class="TA-l">
			   ประเภทราคา
			  </div>
			  <div class="DA-r">
			   <select>
			    <option> ขายสด </option>
			    <option> ขายเชื่อ </option>
			   </select>
			  </div>    
		   </div>
		   <div class="T-l">
			  <div class="TA-l">
			   	วันที่เอกสาร
			  </div>
			  <div class="DA-r">
			   	<input type="date" >
			  </div>
			  <div class="TA-l">
			   	รหัสลูกค้า
			  </div>
			  <div class="DA-r">
			   	<input type="text" placeholder="รหัสลูกค้า" style="width:60%;">
			   	<i class="material-icons">search</i>
			  </div>  
			  <div class="TA-l">
			   	ชื่อลูกค้า
			  </div>
			  <div class="DA-r">
			   	<input type="text" placeholder="ชื่อลูกค้า">
			  </div>     
		   </div>
 	<hr style="clear: both; margin: 5px 0 0 0;" />
	<div class="so-body">
		<div class="web-view">
			<table class="tableSection">
				<thead>
					<tr>
						<th style="width: 5%; text-align: center;"></th>
						<th style="width: 10%; text-align: center;">รหัสสินค้า</th>
						<th style="width: 15%; text-align: center;">ชื่อสินค้า</th>
						<th style="width: 10%; text-align: center;" ng-show="is_docType == 'SaleOrder'">คลัง</th>
						<th style="width: 10%; text-align: center;">ชั้นเก็บ</th>
						<th style="width: 10%; text-align: center;">จำนวน</th>
						<th style="width: 10%; text-align: center;">หน่วย</th>
						<th style="width: 10%; text-align: center;">ราคา</th>
						<th style="width: 10%; text-align: center;">ส่วนลด</th>
						<th style="width: 10%; text-align: center;">มูลค่า</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<button class="addItem" @click="SearchItem">+</button>
			<div class="T-Desc">
				<input type="text">	
			</div>
		</div>
	</div>
	
	<div class="bt-body">
		<div class="bt-lu">
			  <div class="BT-l">
			   ยอดคงเหลือ :
			  </div>
			  <div class="BT-r">
			   	<input type="text">
			  </div>
			  <div class="BT-l">
			   รหัสพนักงาน :
			  </div>
			  <div class="BT-r">
			   	<input type="text" placeholder="รหัสพนักงาน" style="width: 70%;">
			   	<i class="material-icons">search</i>
			  </div>
			  <div class="BT-l">
			   ชื่อพนักงาน :
			  </div>
			  <div class="BT-r">
			   	<input type="text" placeholder="ชื่อพนักงาน">
			  </div>
			  <div class="BT-l">
			   <label>หมายเหตุ 1:</label>
			  </div>
			  <textarea rows="5"></textarea> 
		</div>		
		<div class="bt-lu">
		  	<div class="BT-l">
		   		รหัสแผนก :
		  	</div>
		  	<div class="BT-r">
		   		<input type="text" placeholder="รหัสแผนก" style="width:60%;">
		   		<i class="material-icons">search</i>
		  	</div>
			<div class="BT-l">
				ส่งของภายใน :
			</div>
			<div class="BT-r">
				<input type="number">
			</div>		
			<div class="BT-l">
				 เครดิต :
			</div>
			<div class="BT-r">
				<input type="number">
			</div>	
			<div class="BT-l">
				อ้างใบสั่งซื้อเลข :
			</div>
			<div class="BT-r">
				<input type="text">
			</div>	
			<div class="BT-l">
				JobId :
			</div>
			<div class="BT-r">
				<input type="text">
			</div>	
			<div class="BT-l">
				ค่าขนส่ง :
			</div>
			<div class="BT-r">
				<input type="text">
			</div>	
		</div>		
		<div class="bt-lu">
			<div class="BT-l">
		   		สถานที่ขนส่ง :
		  	</div>
		  	<div class="BT-r">
		   		<input type="text" placeholder="สถานที่ขนส่ง" style="width:60%;">
		   		<i class="material-icons">search</i>
		  	</div>
			<div class="BT-l">
				วันที่ส่งของ :
			</div>
			<div class="BT-r">
				<input type="date">
			</div>	
			<div class="BT-l">
				วันที่ครบกำหน :
			</div>
			<div class="BT-r">
				<input type="date">
			</div>	
		</div>		
		<div class="bt-lu">
			<div class="BT-l">
				วันที่ส่งของ :
			</div>
			<div class="BT-r">
				<input type="date">
			</div>				
		</div>
	</div>
   </div>
	<div class="modal" id="searchHistory">
	  <div class="modal-background"></div>
	  <div class="modal-content">
	    <!-- Any other Bulma elements you want -->
	    <header class="modal-card-head">
	      <p class="modal-card-title">Modal title</p>
	      <button class="delete" @click="closeSearchItem" aria-label="close"></button>
	    </header>
        <section class="modal-card-body">
	      <!-- Content ... -->
	    	<div class="mo-search">
	    		<div class="mo-sleft">
	    			ค้นหา :
	    		</div>
	    		<div class="mo-scenter">
	    			<input type="text" placeholder="กรอกรายละเอียดที่ต้องการค้นหา">
	    		</div>
	    		<div class="mo-sright">
	    			<button class="button is-info is-large"><i class="fa fa-search"></i>&nbsp;ค้นหา</button>
	    		</div>
	    	</div>
	    	<div class="mo-list">
	    		<div class="mo-list-pic">
	    			<img src="../assets/np.jpg">
	    		</div>
	    		<div class="mo-list-dt">
	    			<p class="mo-Icon-title">รหัสสินค้า : ื่อสินค้า</p>
	    			<p>อดคงเหลือ : คลัง S1-A | 2 ชิ้น </p>
	    			<p>ยอดค้างส่ง | ยอดค้างรับ| ยอดจองสินค้า</p>
	    			<p>ราคา :</p>
	    			<p>My Grade</p>
	    		</div>
	    	</div>
	    </section>
	  </div>
	</div>
  </div>
</template>

<script src = "../js/so.js"></script>
