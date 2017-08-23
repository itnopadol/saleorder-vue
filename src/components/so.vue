<template>
	<div class="saleorder">
      {{ msg }}
      <div class="Wcontainer">
    	<div class="head-r">
    		<div class="headR-l">
    			มูลค่าสุทธิ
	      		<br>
	      		<i class="material-icons" width>monetization_on</i>
    		</div>
    		<div class="headR-r">
    			300,000.00 ฿
    		</div>   
			<div class="T-status">
		     	<b>สถานะ : </b>
		    </div> 		
    	</div>
    	<div class="head-l">
    		<div class="headL-l">
    			ประเภทเอกสาร :
    		</div>
    		<div class="headL-r">
    			<select>
    			<option> ใบสั่งขายสินค้า </option>
			    <option> ใบสั่งจองสินค้า </option>
			   </select>
    		</div>
    		<div class="headL-l">
    		ประภทขาย
    		</div>
    		<div class="headL-r">
    			<select>
    			<option> ขายสินค้าเงินสด </option>
			    <option> ขายสินค้าเงินเชื่อ </option>
			   </select>
    		</div>
    		<div class="headL-l">
    			ประเภทภาษี :
    		</div>
    		<div class="headL-r">
    			<select>
    			<option> ภาษีแยกนอก </option>
			    <option> ภาษีรวมใน </option>
			    <option> ภาษีอัตราศูนย์ </option>
			   </select>
    		</div>
    	</div>
    	<div class="head-l1">
    		<div class="headL-l1">
    			เลขที่เอกสาร :
    		</div>
    		<div class="headL-r1">
    			<input type="text">
    		</div>
    		<div class="headL-l1">
    			รหัสลูกค้า :
    		</div>
    		<div class="headL-r1">
				<input type="text" style="width:75%;" placeholder="รหัสลูกค้า">
				<i class="material-icons">search</i>
    		</div>
    	</div>
    	<div class="head-l1">
    		<div class="headL-l1">
    			วันที่เอกสาร :
    		</div>
    		<div class="headL-r1">
    			<input type="date">
    		</div>
    		<div class="headL-l1">
    			ประเภทขนส่ง :
    		</div>
    		<div class="headL-r1">
    			<select>
    			<option> รับเอง </option>
			    <option> ส่งให้ </option>
			   </select>
    		</div>
    	</div>
    	<div class="head-d">
    		<div class="headD-l">
    			ชื่อลูกค้า :
    		</div>
    		<div class="headD-r">
    			<input type="text" placeholder="ชื่อลูกค้า">
    		</div>
    	</div>
    	<hr style="clear: both; margin: 5px 0 0 0;" />
		<div class="body-c">
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
			<div class="buttom-l">
	    		<div class="headL-l">
	    			รหัสพนักงาน :
	    		</div>
	    		<div class="headL-r">
	    			<input type="text" style ="width: 75%;" placeholder="รหัสพนักงาน" >
	    			<i class="material-icons">search</i>
	    		</div>
	    		<div class="headL-l">
	    			รหัสแผนก :
	    		</div>
	    		<div class="headL-r">
	    			<select>
	    				
	    			</select>
	    		</div>
	    		<div class="headL-l">
	    			ส่งของภายใน :
	    		</div>
	    		<div class="headL-r">
	    			<input type="number">
	    		</div>
	    		<div class="headL-l">
	    			เครดิต(วัน) :
	    		</div>
	    		<div class="headL-r">
	    			<input type="number">
	    		</div>
			</div>
			<div class="buttom-l">
	    		<div class="headL-l">
	    			อ้างใบสั่งซื้อ :
	    		</div>
	    		<div class="headL-r">
	    			<input type="text" placeholder="เลขที่ใบสั่งซื้อ" >
	    		</div>
	    		<div class="headL-l">
	    			Job ID :
	    		</div>
	    		<div class="headL-r">
	    			<input type="text" placeholder="Job ID">
	    		</div>
	    		<div class="headL-l">
	    			วันที่ส่งของ :
	    		</div>
	    		<div class="headL-r">
	    			<input type="date">
	    		</div>
	    		<div class="headL-l">
	    			ครบกำหนด :
	    		</div>
	    		<div class="headL-r">
	    			<input type="date">
	    		</div>
			</div>
			<div class="buttom-l">
	    		<div class="headL-l">
	    			ผู้รับสินค้า :
	    		</div>
	    		<div class="headL-r">
	    			<input type="text">
	    		</div>
	    		<div class="headL-l">
	    			ทะเบียนรถ :
	    		</div>
	    		<div class="headL-r">
	    			<input type="text">
	    		</div>
	    		<div class="headL-l">
	    			เบอร์ผู้รับของ :
	    		</div>
	    		<div class="headL-r">
	    			<input type="text">
	    		</div>
	    		<div class="headL-l">
	    			ครบกำหนด :
	    		</div>
	    		<div class="headL-r">
	    			<input type="text" placeholder="Job ID">
	    		</div>
			</div>
			<div class="buttom-l2">
	    		<div class="headL-l">
	    			ผู้รับสินค้า :
	    		</div>
	    		<div class="headL-r">
	    			<input type="text">
	    		</div>
	    		<div class="headL-l">
	    			ทะเบียนรถ :
	    		</div>
	    		<div class="headL-r">
	    			<input type="text">
	    		</div>
	    		<div class="headL-l">
	    			เบอร์ผู้รับของ :
	    		</div>
	    		<div class="headL-r">
	    			<input type="text">
	    		</div>
	    		<div class="headL-l">
	    			ครบกำหนด :
	    		</div>
	    		<div class="headL-r">
	    			<input type="text" placeholder="Job ID">
	    		</div>
			</div>
			<div class="buttom-l1">
				<div class="headL-l">
	    			หมายเหตุ :
	    		</div>
	    		<div class="headL-r">
	    			<input type="text" placeholder="เลขที่ใบสั่งซื้อ" >
	    		</div>	
			</div>
	</div>
  </div>
</template>
<script src = "../js/so.js"></script>